import chalk from 'chalk';
import { logger } from '../utils/logger';
import { join } from 'path';

export function printNewResult(namespace: string, templateName: string) {
  logger.info(
    chalk`{green SUCCESS} Downloaded new template into the "${namespace}" subdirectories.`
  );
  logger.info(
    `Check ${join(
      'readmes',
      namespace,
      `${templateName}.md`
    )} for template instructions.`
  );
}
