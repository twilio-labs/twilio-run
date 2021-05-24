<h1 align="center">@twilio-labs/plugin-serverless</h1>
<p align="center">Plugin for the <a href="https://github.com/twilio/twilio-cli">Twilio CLI</a> to locally develop, debug and deploy to <a href="https://www.twilio.com/functions">Twilio Serverless</a>. Part of the <a href="https://github.com/twilio-labs/serverless-toolkit">Serverless Toolkit</a></p>
<p align="center">
<img alt="npm" src="https://img.shields.io/npm/v/@twilio-labs/plugin-serverless.svg?style=flat-square"> <img alt="npm" src="https://img.shields.io/npm/dt/@twilio-labs/plugin-serverless.svg?style=flat-square"> <img alt="GitHub" src="https://img.shields.io/github/license/twilio-labs/plugin-serverless.svg?style=flat-square"> <a href="#contributors"><img alt="All Contributors" src="https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square" /></a> <a href="https://github.com/twilio-labs/.github/blob/main/CODE_OF_CONDUCT.md"><img alt="Code of Conduct" src="https://img.shields.io/badge/%F0%9F%92%96-Code%20of%20Conduct-blueviolet.svg?style=flat-square"></a> <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a> </<a>
<hr>

This plugin adds functionality to the [Twilio CLI](https://github.com/twilio/twilio-cli) to locally develop,
debug and deploy to Twilio Serverless. It's a part of the [Serverless Toolkit](https://github.com/twilio-labs/serverless-toolkit) and wraps [twilio-run](https://github.com/twilio-labs/twilio-run) and [create-twilio-function](https://github.com/philnash/create-twilio-function).

<!-- toc -->

<!-- tocstop -->

## Requirements

### Install the Twilio CLI

Via `npm` or `yarn`:

```sh-session
$ npm install -g twilio-cli
$ yarn global add twilio-cli
```

Via `homebrew`:

```sh-session
$ brew tap twilio/brew && brew install twilio
```

## Usage

```sh-session
$ twilio plugins:install @twilio-labs/plugin-serverless
$ twilio --help serverless
USAGE
  $ twilio serverless
...
```

### Concurrency

When deploying lots of Functions and Assets it is possible to run up against the enforced concurrency limits of the Twilio API. You can limit the concurrency and set how many times the library retries API requests using environment variables.

The default concurrency is 50 and the default number of retries is 10. You can change this by setting environment variables. The following would set concurrency to 1, only 1 live request at a time, and retries to 0, so if it fails it won't retry.

```sh-session
export TWILIO_SERVERLESS_API_CONCURRENCY=1
export TWILIO_SERVERLESS_API_RETRY_LIMIT=0
```

## Commands

<!-- commands -->
* [`twilio serverless:deploy`](#twilio-serverlessdeploy)
* [`twilio serverless:init NAME`](#twilio-serverlessinit-name)
* [`twilio serverless:list [TYPES]`](#twilio-serverlesslist-types)
* [`twilio serverless:list-templates`](#twilio-serverlesslist-templates)
* [`twilio serverless:logs`](#twilio-serverlesslogs)
* [`twilio serverless:new [NAMESPACE]`](#twilio-serverlessnew-namespace)
* [`twilio serverless:promote`](#twilio-serverlesspromote)
* [`twilio serverless:start [DIR]`](#twilio-serverlessstart-dir)

## `twilio serverless:deploy`

Deploys existing functions and assets to Twilio

```
Deploys existing functions and assets to Twilio

USAGE
  $ twilio serverless:deploy

OPTIONS
  -c, --config=config                  Location of the config file. Absolute path or relative to current working
                                       directory (cwd)

  -l, --log-level=log-level            [default: info] Level of logging messages.

  -n, --service-name=service-name      Overrides the name of the Serverless project. Default: the name field in your
                                       package.json

  -p, --profile=profile                Shorthand identifier for your profile.

  -u, --username=username              A specific API key or account SID to be used for deployment. Uses fields in .env
                                       otherwise

  --[no-]assets                        Upload assets. Can be turned off with --no-assets

  --assets-folder=assets-folder        Specific folder name to be used for static assets

  --cwd=cwd                            Sets the directory of your existing Serverless project. Defaults to current
                                       directory

  --env=env                            Path to .env file for environment variables that should be installed

  --environment=environment            [default: dev] The environment name (domain suffix) you want to use for your
                                       deployment

  --force                              Will run deployment in force mode. Can be dangerous.

  --[no-]functions                     Upload functions. Can be turned off with --no-functions

  --functions-folder=functions-folder  Specific folder name to be used for static functions

  --load-system-env                    Uses system environment variables as fallback for variables specified in your
                                       .env file. Needs to be used with --env explicitly specified.

  --override-existing-project          Deploys Serverless project to existing service if a naming conflict has been
                                       found.

  --password=password                  A specific API secret or auth token for deployment. Uses fields from .env
                                       otherwise

  --production                         Please prefer the "activate" command! Deploys to the production environment (no
                                       domain suffix). Overrides the value passed via the environment flag.

  --runtime=runtime                    The version of Node.js to deploy the build to. (node10 or node12)

  --service-sid=service-sid            SID of the Twilio Serverless Service to deploy to

  --to=to                              [default: dev] The environment name (domain suffix) you want to use for your
                                       deployment
```

_See code: [src/commands/serverless/deploy.js](https://github.com/twilio-labs/serverless-toolkit/blob/v2.0.2-rc.0/src/commands/serverless/deploy.js)_

## `twilio serverless:init NAME`

Creates a new Twilio Function project

```
Creates a new Twilio Function project

USAGE
  $ twilio serverless:init NAME

ARGUMENTS
  NAME  Name of Serverless project and directory that will be created

OPTIONS
  -a, --account-sid=account-sid  The Account SID for your Twilio account
  -p, --profile=profile          Shorthand identifier for your profile.
  -t, --auth-token=auth-token    Your Twilio account Auth Token
  --empty                        Initialize your new project with empty functions and assets directories

  --import-credentials           Import credentials from the environment variables TWILIO_ACCOUNT_SID and
                                 TWILIO_AUTH_TOKEN

  --skip-credentials             Don't ask for Twilio account credentials or import them from the environment

  --template=template            Initialize your new project with a template from
                                 github.com/twilio-labs/function-templates

  --typescript                   Initialize your Serverless project with TypeScript
```

_See code: [src/commands/serverless/init.js](https://github.com/twilio-labs/serverless-toolkit/blob/v2.0.2-rc.0/src/commands/serverless/init.js)_

## `twilio serverless:list [TYPES]`

List existing services, environments, variables, deployments for your Twilio Serverless Account

```
List existing services, environments, variables, deployments for your Twilio Serverless Account

USAGE
  $ twilio serverless:list [TYPES]

ARGUMENTS
  TYPES  [default: services] Comma separated list of things to list (services,environments,functions,assets,variables)

OPTIONS
  -c, --config=config              Location of the config file. Absolute path or relative to current working directory
                                   (cwd)

  -l, --log-level=log-level        [default: info] Level of logging messages.

  -n, --service-name=service-name  Overrides the name of the Serverless project. Default: the name field in your
                                   package.json

  -p, --profile=profile            Shorthand identifier for your profile.

  -u, --username=username          A specific API key or account SID to be used for deployment. Uses fields in .env
                                   otherwise

  --cwd=cwd                        Sets the directory of your existing Serverless project. Defaults to current directory

  --env=env                        Path to .env file for environment variables that should be installed

  --environment=environment        [default: dev] The environment to list variables for

  --extended-output                Show an extended set of properties on the output

  --load-system-env                Uses system environment variables as fallback for variables specified in your .env
                                   file. Needs to be used with --env explicitly specified.

  --password=password              A specific API secret or auth token for deployment. Uses fields from .env otherwise

  --service-sid=service-sid        SID of the Twilio Serverless Service to deploy to

  --to=to                          [default: dev] The environment to list variables for
```

_See code: [src/commands/serverless/list.js](https://github.com/twilio-labs/serverless-toolkit/blob/v2.0.2-rc.0/src/commands/serverless/list.js)_

## `twilio serverless:list-templates`

Lists the available Twilio Function templates

```
Lists the available Twilio Function templates

USAGE
  $ twilio serverless:list-templates

OPTIONS
  -c, --config=config        Location of the config file. Absolute path or relative to current working directory (cwd)
  -l, --log-level=log-level  [default: info] Level of logging messages.
  --cwd=cwd                  Sets the directory of your existing Serverless project. Defaults to current directory
  --env=env                  Path to .env file for environment variables that should be installed
```

_See code: [src/commands/serverless/list-templates.js](https://github.com/twilio-labs/serverless-toolkit/blob/v2.0.2-rc.0/src/commands/serverless/list-templates.js)_

## `twilio serverless:logs`

Print logs from your Twilio Serverless project

```
Print logs from your Twilio Serverless project

USAGE
  $ twilio serverless:logs

OPTIONS
  -c, --config=config                Location of the config file. Absolute path or relative to current working directory
                                     (cwd)

  -l, --log-level=log-level          [default: info] Level of logging messages.

  -o, --output-format=output-format  Output the log in a different format

  -p, --profile=profile              Shorthand identifier for your profile.

  -u, --username=username            A specific API key or account SID to be used for deployment. Uses fields in .env
                                     otherwise

  --cwd=cwd                          Sets the directory of your existing Serverless project. Defaults to current
                                     directory

  --env=env                          Path to .env file for environment variables that should be installed

  --environment=environment          [default: dev] The environment to retrieve the logs for

  --function-sid=function-sid        Specific Function SID to retrieve logs for

  --load-system-env                  Uses system environment variables as fallback for variables specified in your .env
                                     file. Needs to be used with --env explicitly specified.

  --password=password                A specific API secret or auth token for deployment. Uses fields from .env otherwise

  --production                       Retrieve logs for the production environment. Overrides the "environment" flag

  --service-sid=service-sid          SID of the Twilio Serverless Service to deploy to

  --tail                             Continuously stream the logs

  --to=to                            [default: dev] The environment to retrieve the logs for
```

_See code: [src/commands/serverless/logs.js](https://github.com/twilio-labs/serverless-toolkit/blob/v2.0.2-rc.0/src/commands/serverless/logs.js)_

## `twilio serverless:new [NAMESPACE]`

Creates a new Twilio Function based on an existing template

```
Creates a new Twilio Function based on an existing template

USAGE
  $ twilio serverless:new [NAMESPACE]

ARGUMENTS
  NAMESPACE  The namespace your assets/functions should be grouped under

OPTIONS
  -c, --config=config        Location of the config file. Absolute path or relative to current working directory (cwd)
  -l, --log-level=log-level  [default: info] Level of logging messages.
  --cwd=cwd                  Sets the directory of your existing Serverless project. Defaults to current directory
  --env=env                  Path to .env file for environment variables that should be installed
  --template=template
```

_See code: [src/commands/serverless/new.js](https://github.com/twilio-labs/serverless-toolkit/blob/v2.0.2-rc.0/src/commands/serverless/new.js)_

## `twilio serverless:promote`

Promotes an existing deployment to a new environment

```
Promotes an existing deployment to a new environment

USAGE
  $ twilio serverless:promote

OPTIONS
  -c, --config=config                      Location of the config file. Absolute path or relative to current working
                                           directory (cwd)

  -l, --log-level=log-level                [default: info] Level of logging messages.

  -p, --profile=profile                    Shorthand identifier for your profile.

  -u, --username=username                  A specific API key or account SID to be used for deployment. Uses fields in
                                           .env otherwise

  --build-sid=build-sid                    An existing Build SID to deploy to the new environment

  --create-environment                     Creates environment if it couldn't find it.

  --cwd=cwd                                Sets the directory of your existing Serverless project. Defaults to current
                                           directory

  --env=env                                Path to .env file for environment variables that should be installed

  --environment=environment                [default: dev] The environment name (domain suffix) you want to use for your
                                           deployment

  --force                                  Will run deployment in force mode. Can be dangerous.

  --from=from                              SID or suffix of an existing environment you want to deploy from.

  --from-build=from-build                  An existing Build SID to deploy to the new environment

  --load-system-env                        Uses system environment variables as fallback for variables specified in your
                                           .env file. Needs to be used with --env explicitly specified.

  --password=password                      A specific API secret or auth token for deployment. Uses fields from .env
                                           otherwise

  --production                             Promote build to the production environment (no domain suffix). Overrides
                                           environment flag

  --service-sid=service-sid                SID of the Twilio Serverless Service to deploy to

  --source-environment=source-environment  SID or suffix of an existing environment you want to deploy from.

  --to=to                                  [default: dev] The environment name (domain suffix) you want to use for your
                                           deployment

ALIASES
  $ twilio serverless:activate
```

_See code: [src/commands/serverless/promote.js](https://github.com/twilio-labs/serverless-toolkit/blob/v2.0.2-rc.0/src/commands/serverless/promote.js)_

## `twilio serverless:start [DIR]`

Starts local Twilio Functions development server

```
Starts local Twilio Functions development server

USAGE
  $ twilio serverless:start [DIR]

ARGUMENTS
  DIR  Root directory to serve local Functions/Assets from

OPTIONS
  -c, --config=config                  Location of the config file. Absolute path or relative to current working
                                       directory (cwd)

  -f, --load-local-env                 Includes the local environment variables

  -l, --log-level=log-level            [default: info] Level of logging messages.

  -p, --port=port                      (required) [default: 3000] Override default port of 3000

  --assets-folder=assets-folder        Specific folder name to be used for static assets

  --cwd=cwd                            Alternative way to define the directory to start the server in. Overrides the
                                       [dir] argument passed.

  --detailed-logs                      Toggles detailed request logging by showing request body and query params

  --env=env                            Path to .env file for environment variables that should be installed

  --[no-]fork-process                  Disable forking function processes to emulate production environment

  --functions-folder=functions-folder  Specific folder name to be used for static functions

  --inspect=inspect                    Enables Node.js debugging protocol

  --inspect-brk=inspect-brk            Enables Node.js debugging protocol, stops execution until debugger is attached

  --legacy-mode                        Enables legacy mode, it will prefix your asset paths with /assets

  --[no-]live                          Always serve from the current functions (no caching)

  --[no-]logs                          Toggles request logging

  --ngrok=ngrok                        Uses ngrok to create a public url. Pass a string to set the subdomain (requires a
                                       paid-for ngrok account).

ALIASES
  $ twilio serverless:dev
  $ twilio serverless:run
```

_See code: [src/commands/serverless/start.js](https://github.com/twilio-labs/serverless-toolkit/blob/v2.0.2-rc.0/src/commands/serverless/start.js)_
<!-- commandsstop -->

## Contributing

This project welcomes contributions from the community. Please see the [`CONTRIBUTING.md`](https://github.com/twilio-labs/serverless-toolkit/blob/main/docs/CONTRIBUTING.md) file for more details.

### Code of Conduct

Please be aware that this project has a [Code of Conduct](https://github.com/twilio-labs/.github/blob/main/CODE_OF_CONDUCT.md). The tldr; is to just be excellent to each other ❤️

### Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://dkundel.com"><img src="https://avatars3.githubusercontent.com/u/1505101?v=4" width="100px;" alt="Dominik Kundel"/><br /><sub><b>Dominik Kundel</b></sub></a><br /><a href="https://github.com/twilio-labs/plugin-serverless/commits?author=dkundel" title="Code">💻</a> <a href="https://github.com/twilio-labs/plugin-serverless/commits?author=dkundel" title="Documentation">📖</a> <a href="#ideas-dkundel" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/childish-sambino"><img src="https://avatars0.githubusercontent.com/u/47228322?v=4" width="100px;" alt="childish-sambino"/><br /><sub><b>childish-sambino</b></sub></a><br /><a href="https://github.com/twilio-labs/plugin-serverless/commits?author=childish-sambino" title="Code">💻</a> <a href="https://github.com/twilio-labs/plugin-serverless/issues?q=author%3Achildish-sambino" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://www.ThinkingSerious.com"><img src="https://avatars0.githubusercontent.com/u/146695?v=4" width="100px;" alt="Elmer Thomas"/><br /><sub><b>Elmer Thomas</b></sub></a><br /><a href="https://github.com/twilio-labs/plugin-serverless/issues?q=author%3Athinkingserious" title="Bug reports">🐛</a> <a href="https://github.com/twilio-labs/plugin-serverless/commits?author=thinkingserious" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT
