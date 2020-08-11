import { ActivateResult } from '@twilio-labs/serverless-api';
import { stripIndent } from 'common-tags';
import { ActivateConfig } from '../config/activate';
import { logger } from '../utils/logger';
import { writeOutput, writeJSONOutput } from '../utils/output';
import { getTwilioConsoleDeploymentUrl, redactPartOfString } from './utils';
import chalk = require('chalk');
import terminalLink = require('terminal-link');
import { OutputFormat } from '../commands/shared';

export function printActivateConfig(
  config: ActivateConfig,
  outputFormat: OutputFormat
) {
  if (outputFormat === 'json') {
    return;
  }
  const message = chalk`
    {cyan.bold Account} ${config.username}
    {cyan.bold Token}   ${redactPartOfString(config.password)}
  `;
  logger.info(stripIndent(message) + '\n');
}

export function printActivateResult(
  result: ActivateResult,
  outputFormat: OutputFormat
) {
  if (outputFormat === 'json') {
    writeJSONOutput(result, null, '\t');
    return;
  }

  logger.info(chalk.cyan.bold('\nActive build available at:'));
  writeOutput(result.domain);

  const twilioConsoleLogsLink = terminalLink(
    'Open the Twilio Console',
    getTwilioConsoleDeploymentUrl(result.serviceSid, result.environmentSid),
    {
      fallback: (text: string, url: string) => chalk.dim(url),
    }
  );

  logger.info(
    '\n' +
      stripIndent(chalk`
    {cyan.bold View Live Logs:}
      ${twilioConsoleLogsLink}
  `)
  );
}
