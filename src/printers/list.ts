import {
  AssetVersion,
  BuildResource,
  EnvironmentResource,
  FunctionVersion,
  ListOptions,
  ListResult,
  ServiceResource,
  VariableResource,
} from '@twilio-labs/serverless-api';
import chalk from 'chalk';
import columnify from 'columnify';
import { stripIndent } from 'common-tags';
import startCase from 'lodash.startcase';
import logSymbols from 'log-symbols';
import title from 'title';
import { ListConfig } from '../config/list';
import { logger } from '../utils/logger';
import { writeOutput, writeJSONOutput } from '../utils/output';
import { redactPartOfString, shouldPrettyPrint, windowSize } from './utils';
import { OutputFormat } from '../commands/shared';

type KeyMaps = {
  [key in ListOptions]: string[];
};

const LONG_LINE = '─'.repeat(windowSize.width);

const baseKeys: KeyMaps = {
  environments: [
    'sid',
    'build_sid',
    'unique_name',
    'domain_name',
    'domain_suffix',
    'date_updated',
  ],
  builds: ['sid', 'status', 'date_updated'],
  services: ['sid', 'unique_name', 'date_created', 'date_updated'],
  variables: ['environment_sid', 'key', 'value'],
  functions: ['path', 'visibility'],
  assets: ['path', 'visibility'],
};

const extendedKeys: KeyMaps = {
  environments: [
    'account_sid',
    'service_sid',
    'sid',
    'build_sid',
    'unique_name',
    'domain_name',
    'domain_suffix',
    'date_created',
    'date_updated',
  ],
  builds: [
    'account_sid',
    'service_sid',
    'sid',
    'status',
    'date_created',
    'date_updated',
    'function_versions',
    'asset_versions',
    'dependencies',
  ],
  services: [
    'account_sid',
    'sid',
    'unique_name',
    'friendly_name',
    'date_created',
    'date_updated',
  ],
  variables: [
    'account_sid',
    'service_sid',
    'environment_sid',
    'sid',
    'key',
    'value',
    'date_created',
    'date_updated',
  ],
  functions: [
    'account_sid',
    'service_sid',
    'function_sid',
    'sid',
    'path',
    'visibility',
    'date_created',
  ],
  assets: [
    'account_sid',
    'service_sid',
    'asset_sid',
    'sid',
    'path',
    'visibility',
    'date_created',
  ],
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toString().slice(4, 33);
}

function sortByAccess(resA: CommonType, resB: CommonType) {
  if (resA.visibility === resB.visibility) {
    resA.path.localeCompare(resB.path);
  }
  return resA.visibility.localeCompare(resB.visibility);
}

const headingTransform = (name: string) => {
  return chalk.cyan.bold(startCase(name).replace(/Sid$/g, 'SID'));
};

function printRows(rows: any[], keys: string[]) {
  return columnify(rows, { columns: keys, headingTransform });
}

function getKeys(type: ListOptions, config: ListConfig) {
  let keys = config.properties || [];

  if (config.extendedOutput) {
    keys = extendedKeys[type];
  } else if (!config.properties) {
    keys = baseKeys[type];
  }

  return keys;
}

function printSection<T extends ListOptions>(
  type: T,
  sectionEntries: ListResult[T],
  config: ListConfig
) {
  let keys = getKeys(type, config);

  let sectionEntryArray: any[] = [];
  if (Array.isArray(sectionEntries)) {
    sectionEntryArray = sectionEntries;
  } else if (sectionEntries && sectionEntries.entries) {
    sectionEntryArray = sectionEntries.entries;
  }

  return printRows(sectionEntryArray, keys);
}

function printListResultPlain(result: ListResult, config: ListConfig) {
  const types = Object.keys(result) as ListOptions[];

  if (types.length === 1) {
    writeOutput(printSection(types[0], result[types[0]], config));
    return;
  }

  for (const type of types) {
    const section = result[type];
    const output = printSection(type, section, config);
    writeOutput(startCase(type) + '\n' + output + '\n');
  }
}

export type CommonKeysFunctionAndAssetVersion = Extract<
  keyof FunctionVersion,
  keyof AssetVersion
>;
export type CommonType = {
  [key in CommonKeysFunctionAndAssetVersion]: FunctionVersion[key];
};
export type FunctionOrAssetContent = {
  environmentSid: string;
  entries: CommonType[];
};

function prettyPrintFunctionsOrAssets(result: FunctionOrAssetContent) {
  const { entries } = result;
  const resourceString = entries
    .sort(sortByAccess)
    .map<string>((entry: CommonType, idx: number): string => {
      const suffix =
        entry.visibility === 'public'
          ? ' '
          : chalk`{dim [Visibility {reset.bold ${entry.visibility}}]}`;
      return stripIndent(chalk`
        {dim │} {reset ${entry.path}} ${suffix}
      `);
    })
    .join('\n');

  return resourceString;
}

type VariablesContent = {
  environmentSid: string;
  entries: VariableResource[];
};

function prettyPrintVariables(variables: VariablesContent) {
  const { entries } = variables;

  const updatedRows = entries.map((entry: VariableResource) => {
    return {
      ...entry,
      key: chalk`{dim │} {cyan ${entry.key}}:`,
    };
  });

  const renderedValues = columnify(updatedRows, {
    columns: ['key', 'value'],
    showHeaders: false,
  });

  return renderedValues;
}

function prettyPrintEnvironment(environment: EnvironmentResource): string {
  return stripIndent(chalk`
      {bold ${environment.domain_suffix}} {dim [${environment.sid}]}
      {dim │} {cyan URL:         } {reset ${environment.domain_name}}
      {dim │} {cyan Unique Name: } {reset ${environment.unique_name}}
      {dim │} {cyan Active Build:} {reset ${environment.build_sid}}
      {dim │} {cyan Last Updated:} {reset ${formatDate(
        environment.date_updated
      )}}
  `);
}

function prettyPrintServices(service: ServiceResource): string {
  return stripIndent(chalk`
  {bold ${service.unique_name}}
  {dim │} {cyan SID: }     ${service.sid}
  {dim │} {cyan Created: } {dim ${formatDate(service.date_created)}}
  {dim │} {cyan Updated: } {dim ${formatDate(service.date_updated)}}
  `);
}

function prettyPrintBuilds(build: BuildResource): string {
  let status = chalk.reset.yellow(build.status);
  if (build.status === 'completed') {
    status = chalk.reset.green(`${logSymbols.success} ${build.status}`);
  } else if (build.status === 'failed') {
    status = chalk.reset.red(`${logSymbols.error} ${build.status}`);
  }
  return stripIndent(chalk`
      {bold ${build.sid}} {dim [${status}]}
      {dim │} {cyan Date:} {dim ${formatDate(build.date_updated)}}
  `);
}

function prettyPrintSection<T extends ListOptions>(
  sectionTitle: ListOptions,
  sectionContent: ListResult[T]
): string {
  let sectionHeader = chalk.cyan.bold(`${title(sectionTitle)}:`);
  let content = '';
  if (sectionTitle === 'builds') {
    content = (sectionContent as BuildResource[])
      .map(prettyPrintBuilds)
      .join(`\n\n`);
  } else if (sectionTitle === 'environments') {
    content = (sectionContent as EnvironmentResource[])
      .map(prettyPrintEnvironment)
      .join('\n\n');
  } else if (sectionTitle === 'services') {
    content = (sectionContent as ServiceResource[])
      .map(prettyPrintServices)
      .join('\n\n');
  } else if (sectionTitle === 'variables') {
    const data = sectionContent as VariablesContent;
    sectionHeader = chalk`{cyan.bold ${title(
      sectionTitle
    )}} {dim for environment ${data.environmentSid}}`;
    content = prettyPrintVariables(data);
  } else if (sectionTitle === 'functions' || sectionTitle === 'assets') {
    const data = sectionContent as FunctionOrAssetContent;
    sectionHeader = chalk`{cyan.bold ${title(
      sectionTitle
    )}} {dim for environment ${data.environmentSid}}`;
    content = prettyPrintFunctionsOrAssets(data);
  }
  const output = stripIndent`
    ${sectionHeader}\n\n${content}\n\n\n
  `;
  return output;
}

function printListResultTerminal(result: ListResult, config: ListConfig): void {
  const sections = Object.keys(result) as ListOptions[];
  const output = sections
    .map(section => prettyPrintSection(section, result[section]))
    .join(`\n\n${chalk.dim(LONG_LINE)}\n\n`);

  let metaInfo = stripIndent(chalk`
    {cyan.bold Account}      ${config.username}
    {cyan.bold Token}        ${redactPartOfString(config.password)}
  `);

  if (config.serviceSid || config.serviceName) {
    metaInfo += chalk`\n{cyan.bold Service}      ${config.serviceSid ||
      config.serviceName}`;
  }

  if (config.environment) {
    metaInfo += chalk`\n{cyan.bold Environment}  ${config.environment}`;
  }

  logger.info(metaInfo + '\n');
  writeOutput(output);
}

export function printListResult(
  result: ListResult,
  config: ListConfig,
  outputFormat: OutputFormat
): void {
  if (outputFormat === 'json') {
    writeJSONOutput(result);
    return;
  }
  if (shouldPrettyPrint && !config.properties && !config.extendedOutput) {
    printListResultTerminal(result, config);
  } else {
    printListResultPlain(result, config);
  }
}
