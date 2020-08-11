import { Options } from 'yargs';
import { LoggingLevel, LoggingLevelNames } from '../utils/logger';

export type OutputFormat = 'json' | 'pretty' | undefined;

export type BaseFlags = {
  logLevel: LoggingLevelNames;
  outputFormat: OutputFormat;
};

export type SharedFlags = BaseFlags & {
  config: string;
  cwd?: string;
};

export type SharedFlagsWithCredentials = SharedFlags & {
  accountSid?: string;
  authToken?: string;
  env?: string;
  region?: string;
  edge?: string;
  loadSystemEnv: boolean;
};

export type ExternalCliOptions = {
  username: string;
  password: string;
  accountSid?: string;
  profile?: string;
  project?: string;
  logLevel?: string;
  outputFormat?: string;
};

export const baseCliOptions: { [key: string]: Options } = {
  logLevel: {
    type: 'string',
    default: 'info',
    alias: 'l',
    describe: 'Level of logging messages.',
    choices: Object.keys(LoggingLevel),
  },
  'output-format': {
    type: 'string',
    default: 'pretty',
    alias: 'o',
    describe: 'Format of command output.',
    choices: ['json', 'pretty'],
  },
};

export const sharedApiRelatedCliOptions: { [key: string]: Options } = {
  region: {
    type: 'string',
    hidden: true,
    describe: 'Twilio API Region',
  },
  edge: {
    type: 'string',
    hidden: true,
    describe: 'Twilio API Region',
  },
  'account-sid': {
    type: 'string',
    alias: 'u',
    describe:
      'A specific account SID to be used for deployment. Uses ACCOUNT_SID field in .env otherwise',
  },
  'auth-token': {
    type: 'string',
    describe:
      'Use a specific auth token for deployment. Uses AUTH_TOKEN field from .env otherwise',
  },
  'load-system-env': {
    default: false,
    type: 'boolean',
    describe:
      'Uses system environment variables as fallback for variables specified in your .env file. Needs to be used with --env explicitly specified.',
  },
};

export const sharedCliOptions: { [key: string]: Options } = {
  ...baseCliOptions,
  config: {
    alias: 'c',
    type: 'string',
    default: '.twilio-functions',
    describe:
      'Location of the config file. Absolute path or relative to current working directory (cwd)',
  },
  cwd: {
    type: 'string',
    describe:
      'Sets the directory of your existing Serverless project. Defaults to current directory',
  },
};
