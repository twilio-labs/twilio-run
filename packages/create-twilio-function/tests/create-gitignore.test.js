const fs = require('fs');
const path = require('path');
const os = require('os');
const { promisify } = require('util');

const rimraf = require('rimraf');
const nock = require('nock');

const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

const createGitignore = require('../src/create-twilio-function/create-gitignore');

function setupDir() {
  const dirPath = fs.mkdtempSync(
    path.join(os.tmpdir(), 'test-twilio-run-gitignore-')
  );
  return {
    tmpDir: dirPath,
    cleanUp() {
      rimraf.sync(dirPath);
    },
  };
}

describe('create-gitignore', () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.enableNetConnect();
  });

  beforeEach(() => {
    nock('https://raw.githubusercontent.com')
      .get('/github/gitignore/master/Node.gitignore')
      .reply(200, '*.log\n.env');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('createGitignore', () => {
    test('it creates a new .gitignore file', async () => {
      const { tmpDir: scratchDir, cleanUp } = setupDir();
      const name = 'test-ignore-1';
      const basePath = path.join(scratchDir, name);
      fs.mkdirSync(basePath, { recursive: true });

      await createGitignore(basePath);
      const file = await stat(path.join(basePath, '.gitignore'));
      expect(file.isFile());
      const contents = await readFile(path.join(basePath, '.gitignore'), {
        encoding: 'utf-8',
      });
      expect(contents).toMatch('*.log');
      expect(contents).toMatch('.env');
      expect(contents).toMatch('.twiliodeployinfo');
      cleanUp();
    });

    test('it rejects if there is already a .gitignore file', async () => {
      const { tmpDir: scratchDir, cleanUp } = setupDir();
      const name = 'test-ignore-2';
      const basePath = path.join(scratchDir, name);
      fs.mkdirSync(basePath, { recursive: true });

      fs.closeSync(fs.openSync(path.join(basePath, '.gitignore'), 'w'));
      expect.assertions(1);
      try {
        await createGitignore(basePath);
      } catch (e) {
        expect(e.toString()).toMatch('file already exists');
      }
      cleanUp();
    });
  });
});
