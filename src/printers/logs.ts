import { LogApiResource } from '@twilio-labs/serverless-api';
import { LogsConfig } from '../config/logs';
import { writeOutput } from '../utils/output';
import { OutputFormat } from '../commands/shared';

export function printLogs(
  result: LogApiResource[],
  outputFormat: OutputFormat
) {
  result.forEach(log => printLog(log, outputFormat));
}

export function printLog(log: LogApiResource, outputFormat: OutputFormat) {
  if (outputFormat === 'json') {
    writeOutput(JSON.stringify(log));
  } else {
    writeOutput(`[${log.level}][${log.date_created}]: ${log.message}`);
  }
}
