import { TwilioServerlessApiClient } from '@twilio-labs/serverless-api';
import { Ora } from 'ora';
import { Argv } from 'yargs';
import { checkConfigForCredentials } from '../checks/check-credentials';
import {
  ActivateCliFlags,
  ActivateConfig,
  getConfigFromFlags,
} from '../config/activate';
import { printActivateConfig, printActivateResult } from '../printers/activate';
import {
  getDebugFunction,
  getOraSpinner,
  logApiError,
  logger,
  setLogLevelByName,
} from '../utils/logger';
import {
  ExternalCliOptions,
  sharedApiRelatedCliOptions,
  sharedCliOptions,
} from './shared';
import { CliInfo } from './types';

const debug = getDebugFunction('twilio-run:activate');

function logError(msg: string) {
  logger.error(msg);
}

function handleError(err: Error, spinner: Ora) {
  debug('%O', err);
  if (spinner) {
    if (err.name === 'TwilioApiError') {
      spinner.fail('Failed promoting build.');
      logApiError(logger, err);
    } else {
      spinner.fail(err.message);
    }
  }
  process.exit(1);
}

export async function handler(
  flags: ActivateCliFlags,
  externalCliOptions?: ExternalCliOptions
): Promise<void> {
  setLogLevelByName(flags.logLevel);
  let config: ActivateConfig;
  try {
    config = await getConfigFromFlags(flags, externalCliOptions);
  } catch (err) {
    debug(err);
    logError(err.message);
    process.exit(1);
    return;
  }

  if (!config) {
    logError('Internal Error');
    process.exit(1);
    return;
  }

  checkConfigForCredentials(config);

  printActivateConfig(config, flags.outputFormat);

  const details = config.buildSid
    ? `(${config.buildSid})`
    : `from ${config.sourceEnvironment}`;
  const spinner = getOraSpinner(
    `Activating build ${details} to ${config.targetEnvironment || 'production'}`
  ).start();
  try {
    const client = new TwilioServerlessApiClient(config);
    const result = await client.activateBuild(config);
    spinner.succeed(
      `Activated new build ${details} on ${config.targetEnvironment ||
        'production'}`
    );
    printActivateResult(result, flags.outputFormat);
  } catch (err) {
    handleError(err, spinner);
  }
}

export const cliInfo: CliInfo = {
  options: {
    ...sharedCliOptions,
    ...sharedApiRelatedCliOptions,
    'service-sid': {
      type: 'string',
      describe: 'SID of the Twilio Serverless Service to deploy to',
    },
    'build-sid': {
      type: 'string',
      alias: 'from-build',
      describe: 'An existing Build SID to deploy to the new environment',
    },
    'source-environment': {
      type: 'string',
      alias: 'from',
      describe:
        'SID or suffix of an existing environment you want to deploy from.',
    },
    environment: {
      type: 'string',
      alias: 'to',
      describe: 'The environment suffix or SID to deploy to.',
    },
    production: {
      type: 'boolean',
      describe:
        'Promote build to the production environment (no domain suffix). Overrides environment flag',
    },
    'create-environment': {
      type: 'boolean',
      describe: "Creates environment if it couldn't find it.",
      default: false,
    },
    force: {
      type: 'boolean',
      describe: 'Will run deployment in force mode. Can be dangerous.',
      default: false,
    },
    env: {
      type: 'string',
      describe:
        'Path to .env file for environment variables that should be installed',
    },
  },
};

function optionBuilder<T>(yargs: Argv<any>): Argv<ActivateCliFlags> {
  yargs = yargs
    .example(
      '$0 promote --environment=prod --source-environment=dev  ',
      'Promotes the same build that is on the "dev" environment to the "prod" environment'
    )
    .example(
      '$0 promote --to=prod --from=dev  ',
      'Promotes the same build that is on the "dev" environment to the "prod" environment'
    )
    .example(
      '$0 promote --environment=demo --create-environment --build-sid=ZB1234xxxxxxxxxx',
      'Duplicates an existing build to a new environment called `demo`'
    )
    .example(
      '$0 promote --to=demo --create-environment --from-build=ZB1234xxxxxxxxxx',
      'Duplicates an existing build to a new environment called `demo`'
    );

  yargs = Object.keys(cliInfo.options).reduce((yargs, name) => {
    return yargs.option(name, cliInfo.options[name]);
  }, yargs);

  return yargs;
}

export const command = ['promote', 'activate'];
export const describe = 'Promotes an existing deployment to a new environment';
export const builder = optionBuilder;
