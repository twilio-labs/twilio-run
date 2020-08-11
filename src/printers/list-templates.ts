import chalk from 'chalk';
import { Template } from '../templating/data';
import { writeOutput, writeJSONOutput } from '../utils/output';
import { OutputFormat } from '../commands/shared';
import { shouldPrettyPrint } from './utils';

function prettyPrintTemplates(templates: Template[]) {
  templates.forEach(template => {
    writeOutput(
      chalk`‣ ${template.name} ({cyan ${template.id}})\n  {dim ${template.description}}`
    );
  });
}

function plainPrintTemplates(templates: Template[]) {
  templates.forEach(template => {
    writeOutput(`${template.name} (${template.id})\n  ${template.description}`);
  });
}

export function printTemplates(
  templates: Template[],
  outputFormat: OutputFormat
) {
  if (outputFormat === 'json') {
    writeJSONOutput(templates);
    return;
  }
  if (shouldPrettyPrint) {
    prettyPrintTemplates(templates);
  } else {
    plainPrintTemplates(templates);
  }
}
