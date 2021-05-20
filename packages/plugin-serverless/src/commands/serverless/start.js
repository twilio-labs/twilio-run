const { Command } = require('@oclif/command');

const {
  handler,
  cliInfo,
  describe,
} = require('twilio-run/dist/commands/start');
const {
  convertYargsOptionsToOclifFlags,
  normalizeFlags,
} = require('../../utils');

const { flags, aliasMap } = convertYargsOptionsToOclifFlags(cliInfo.options);

class FunctionsStart extends Command {
  async run() {
    let { flags, args } = this.parse(FunctionsStart);

    flags = normalizeFlags(flags, aliasMap);

    const opts = Object.assign({}, flags, args);
    return handler(opts, undefined);
  }
}

FunctionsStart.description = describe;

FunctionsStart.args = [
  {
    name: 'dir',
    required: false,
    description: 'Root directory to serve local Functions/Assets from',
  },
];

FunctionsStart.flags = Object.assign(flags);

FunctionsStart.aliases = ['serverless:dev', 'serverless:run'];

module.exports = FunctionsStart;
