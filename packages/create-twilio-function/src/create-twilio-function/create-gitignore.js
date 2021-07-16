const fs = require('fs').promises;
const { createWriteStream } = require('fs');
const path = require('path');
const { promisify } = require('util');

const writeGitignore = promisify(require('gitignore').writeFile);

const ADDITIONAL_CONTENT = `
# Twilio Serverless
.twiliodeployinfo
`;

async function createGitignore(dirPath) {
  const fullPath = path.join(dirPath, '.gitignore');
  const fd = await fs.open(fullPath, 'wx');
  const stream = createWriteStream(fullPath, { fd });
  await writeGitignore({
    type: 'Node',
    file: stream,
  });
  await fd.close();
  await fs.appendFile(fullPath, ADDITIONAL_CONTENT, 'utf8');
}

module.exports = createGitignore;
