import {
  Context,
  ServerlessCallback,
  ServerlessFunctionSignature,
  TwilioClient,
  TwilioClientOptions,
  TwilioPackage,
} from '@twilio-labs/serverless-runtime-types/types';
import chalk from 'chalk';
import { fork } from 'child_process';
import {
  NextFunction,
  Request as ExpressRequest,
  RequestHandler as ExpressRequestHandler,
  Response as ExpressResponse,
} from 'express';
import { join, resolve } from 'path';
import { deserializeError } from 'serialize-error';
import { checkForValidAccountSid } from './checks/check-account-sid';
import { checkForValidAuthToken } from './checks/check-auth-token';
import { Reply } from './internal/functionRunner';
import { Response } from './internal/response';
import * as Runtime from './internal/runtime';
import { ServerConfig } from './types';
import debug from './utils/debug';
import { wrapErrorInHtml } from './utils/error-html';
import { getCodeLocation } from './utils/getCodeLocation';
import { requireFromProject } from './utils/requireFromProject';
import { cleanUpStackTrace } from './utils/stack-trace/clean-up';

const log = debug('twilio-runtime-handler:dev:route');

const RUNNER_PATH =
  process.env.NODE_ENV === 'test'
    ? resolve(__dirname, '../../dist/dev-runtime/internal/functionRunner')
    : join(__dirname, 'internal', 'functionRunner');

let twilio: TwilioPackage;

export function constructEvent<T extends {} = {}>(req: ExpressRequest): T {
  return { ...req.query, ...req.body };
}

export function augmentContextWithOptionals(
  config: ServerConfig,
  context: Context
): Context<{
  ACCOUNT_SID?: string;
  AUTH_TOKEN?: string;
  DOMAIN_NAME: string;
  PATH: string;
  SERVICE_SID: string | undefined;
  ENVIRONMENT_SID: string | undefined;
  [key: string]: string | undefined | Function;
}> {
  log('Adding getters with warnings to optional properties');
  if (typeof context.SERVICE_SID === 'undefined') {
    let _serviceSid: string | undefined = undefined;
    Object.defineProperty(context, 'SERVICE_SID', {
      get: () => {
        if (_serviceSid === undefined) {
          console.warn(
            chalk`{bold.yellow WARNING} at ${getCodeLocation({
              relativeFrom: config.baseDir,
              offset: 1,
            })} The SERVICE_SID variable is undefined by default in local development. This variable will be autopopulated when your Functions get deployed. Learn more at: https://twil.io/toolkit-variables`
          );
        }
        return _serviceSid;
      },
      set: (value: string) => {
        _serviceSid = value;
      },
    });
  }
  if (typeof context.ENVIRONMENT_SID === 'undefined') {
    let _environmentSid: string | undefined = undefined;
    Object.defineProperty(context, 'ENVIRONMENT_SID', {
      get: () => {
        if (_environmentSid === undefined) {
          console.warn(
            chalk`{bold.yellow WARNING} at ${getCodeLocation({
              relativeFrom: config.baseDir,
              offset: 1,
            })}: The ENVIRONMENT_SID variable is undefined by default in local development. This variable will be autopopulated when your Functions get deployed. Learn more at: https://twil.io/toolkit-variables`
          );
        }
        return _environmentSid;
      },
      set: (value: string) => {
        _environmentSid = value;
      },
    });
  }
  return context;
}

export function constructContext<T extends {} = {}>(
  { url, env, logger, baseDir }: ServerConfig,
  functionPath: string
): Context<{
  ACCOUNT_SID?: string;
  AUTH_TOKEN?: string;
  DOMAIN_NAME: string;
  PATH: string;
  [key: string]: string | undefined | Function;
}> {
  function getTwilioClient(opts?: TwilioClientOptions): TwilioClient {
    checkForValidAccountSid(env.ACCOUNT_SID, {
      shouldPrintMessage: true,
      shouldThrowError: true,
      functionName: 'context.getTwilioClient()',
      logger: logger,
    });
    checkForValidAuthToken(env.AUTH_TOKEN, {
      shouldPrintMessage: true,
      shouldThrowError: true,
      functionName: 'context.getTwilioClient()',
      logger: logger,
    });

    return requireFromProject(baseDir, 'twilio', true)(
      env.ACCOUNT_SID,
      env.AUTH_TOKEN,
      {
        lazyLoading: true,
        ...opts,
      }
    );
  }
  const DOMAIN_NAME = url.replace(/^https?:\/\//, '');
  const PATH = functionPath;
  const context = {
    PATH,
    DOMAIN_NAME,
    SERVICE_SID: undefined,
    ENVIRONMENT_SID: undefined,
    ...env,
    getTwilioClient,
  };
  return context;
}

export function constructGlobalScope(config: ServerConfig): void {
  twilio = requireFromProject(config.baseDir, 'twilio', true);
  const GlobalRuntime = Runtime.create(config);
  (global as any)['Twilio'] = { ...twilio, Response };
  (global as any)['Runtime'] = GlobalRuntime;
  (global as any)['Functions'] = GlobalRuntime.getFunctions();
  (global as any)['Response'] = Response;

  if (
    checkForValidAccountSid(config.env.ACCOUNT_SID) &&
    config.env.AUTH_TOKEN
  ) {
    (global as any)['twilioClient'] = new twilio.Twilio(
      config.env.ACCOUNT_SID,
      config.env.AUTH_TOKEN,
      {
        lazyLoading: true,
      }
    );
  }
}

function isError(obj: any): obj is Error {
  return obj instanceof Error;
}

export function handleError(
  err: Error | string | object,
  req: ExpressRequest,
  res: ExpressResponse,
  functionFilePath?: string
) {
  res.status(500);
  if (isError(err)) {
    const cleanedupError = cleanUpStackTrace(err);

    if (req.useragent && (req.useragent.isDesktop || req.useragent.isMobile)) {
      res.type('text/html');
      res.send(wrapErrorInHtml(cleanedupError, functionFilePath));
    } else {
      res.send({
        message: cleanedupError.message,
        name: cleanedupError.name,
        stack: cleanedupError.stack,
      });
    }
  } else {
    res.send(err);
  }
}

export function isTwiml(obj: object): boolean {
  if (!twilio) {
    log('Unexpected call of isTwiml. Require twilio manual');
    twilio = require('twilio');
  }
  const { VoiceResponse, MessagingResponse, FaxResponse } = twilio.twiml;
  const isVoiceTwiml = obj instanceof VoiceResponse;
  const isMessagingTwiml = obj instanceof MessagingResponse;
  const isFaxTwiml = obj instanceof FaxResponse;
  return isVoiceTwiml || isMessagingTwiml || isFaxTwiml;
}

export function handleSuccess(
  responseObject: string | number | boolean | object | undefined,
  res: ExpressResponse
) {
  res.status(200);
  if (typeof responseObject === 'string') {
    log('Sending basic string response');
    res.type('text/plain').send(responseObject);
    return;
  }

  if (
    responseObject &&
    typeof responseObject === 'object' &&
    isTwiml(responseObject)
  ) {
    log('Sending TwiML response as XML string');
    res.type('text/xml').send(responseObject.toString());
    return;
  }

  if (responseObject && responseObject instanceof Response) {
    log('Sending custom response');
    responseObject.applyToExpressResponse(res);
    return;
  }

  log('Sending JSON response');
  res.send(responseObject);
}

export function functionPathToRoute(
  functionPath: string,
  config: ServerConfig
) {
  return function twilioFunctionHandler(
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
  ) {
    const event = constructEvent(req);
    const forked = fork(RUNNER_PATH);
    forked.on(
      'message',
      ({
        err,
        reply,
        debugMessage,
        debugArgs = [],
      }: {
        err?: Error | number | string;
        reply?: Reply;
        debugMessage?: string;
        debugArgs?: any[];
      }) => {
        if (debugMessage) {
          log(debugMessage, ...debugArgs);
          return;
        }
        if (err) {
          const error = deserializeError(err);
          handleError(error, req, res, functionPath);
        }
        if (reply) {
          res.status(reply.statusCode);
          res.set(reply.headers);
          res.send(reply.body);
        }
        forked.kill();
      }
    );

    forked.send({ functionPath, event, config, path: req.path });
  };
}

export function functionToRoute(
  fn: ServerlessFunctionSignature,
  config: ServerConfig,
  functionFilePath?: string
): ExpressRequestHandler {
  return function twilioFunctionHandler(
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
  ) {
    const event = constructEvent(req);
    log('Event for %s: %o', req.path, event);
    const context = constructContext(config, req.path);
    log('Context for %s: %p', req.path, context);
    let run_timings: {
      start: [number, number];
      end: [number, number];
    } = {
      start: [0, 0],
      end: [0, 0],
    };

    const callback: ServerlessCallback = function callback(err, payload?) {
      run_timings.end = process.hrtime();
      log('Function execution %s finished', req.path);
      log(
        `(Estimated) Total Execution Time: ${
          (run_timings.end[0] * 1e9 +
            run_timings.end[1] -
            (run_timings.start[0] * 1e9 + run_timings.start[1])) /
          1e6
        }ms`
      );
      if (err) {
        handleError(err, req, res, functionFilePath);
        return;
      }
      handleSuccess(payload, res);
    };

    log('Calling function for %s', req.path);
    try {
      run_timings.start = process.hrtime();
      fn(context, event, callback);
    } catch (err) {
      callback(err);
    }
  };
}
