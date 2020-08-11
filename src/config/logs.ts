import {
  ClientConfig,
  LogsConfig as ApiLogsConfig,
} from '@twilio-labs/serverless-api';
import path from 'path';
import { Arguments } from 'yargs';
import checkForValidServiceSid from '../checks/check-service-sid';
import { cliInfo } from '../commands/logs';
import {
  ExternalCliOptions,
  SharedFlagsWithCredentials,
} from '../commands/shared';
import { getFullCommand } from '../commands/utils';
import { readSpecializedConfig } from './global';
import { getCredentialsFromFlags, readLocalEnvFile } from './utils';
import { mergeFlagsAndConfig } from './utils/mergeFlagsAndConfig';

export type LogsConfig = ClientConfig &
  ApiLogsConfig & {
    username: string;
    password: string;
    cwd: string;
    properties?: string[];
  };

export type LogsCliFlags = Arguments<
  SharedFlagsWithCredentials & {
    cwd?: string;
    environment?: string;
    serviceSid?: string;
    functionSid?: string;
    tail: boolean;
  }
>;

export async function getConfigFromFlags(
  flags: LogsCliFlags,
  externalCliOptions?: ExternalCliOptions
): Promise<LogsConfig> {
  let cwd = flags.cwd ? path.resolve(flags.cwd) : process.cwd();
  flags.cwd = cwd;

  let environment = flags.environment || 'dev';
  flags.environment = environment;

  const configFlags = readSpecializedConfig(cwd, flags.config, 'logsConfig', {
    projectId:
      flags.accountSid ||
      (externalCliOptions && externalCliOptions.accountSid) ||
      undefined,
    environmentSuffix: environment,
  });

  flags = mergeFlagsAndConfig(configFlags, flags, cliInfo);
  cwd = flags.cwd || cwd;
  environment = flags.environment || environment;

  const { localEnv: envFileVars, envPath } = await readLocalEnvFile(flags);
  const { accountSid, authToken } = await getCredentialsFromFlags(
    flags,
    envFileVars,
    externalCliOptions
  );

  const command = getFullCommand(flags);
  const serviceSid = checkForValidServiceSid(command, flags.serviceSid);
  const region = flags.region;
  const edge = flags.edge;

  return {
    cwd,
    username: accountSid,
    password: authToken,
    environment,
    serviceSid,
    filterByFunction: flags.functionSid,
    tail: flags.tail,
    region,
    edge,
  };
}
