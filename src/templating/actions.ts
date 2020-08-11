import { getTemplateFiles } from './data';
import { writeFiles } from './filesystem';

export async function downloadTemplate(
  templateName: string,
  namespace: string,
  targetDirectory: string
): Promise<void> {
  const files = await getTemplateFiles(templateName);
  await writeFiles(files, targetDirectory, namespace, templateName);
}

export { fetchListOfTemplates } from './data';
