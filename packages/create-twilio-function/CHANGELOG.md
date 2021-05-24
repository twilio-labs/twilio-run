# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.2-rc.0](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.1...create-twilio-function@3.0.2-rc.0) (2021-05-24)

**Note:** Version bump only for package create-twilio-function





## [3.0.1](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.0...create-twilio-function@3.0.1) (2021-05-20)

**Note:** Version bump only for package create-twilio-function





# [3.0.0](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.0-beta.7...create-twilio-function@3.0.0) (2021-05-19)

**Note:** Version bump only for package create-twilio-function





# [3.0.0-beta.7](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.0-beta.6...create-twilio-function@3.0.0-beta.7) (2021-05-17)


### Bug Fixes

* **create-twilio-function:** use latest twilio-run version ([#263](https://github.com/twilio-labs/serverless-toolkit/issues/263)) ([1c91668](https://github.com/twilio-labs/serverless-toolkit/commit/1c9166858ea2a2bab978dc37528f4f476f21a677)), closes [#259](https://github.com/twilio-labs/serverless-toolkit/issues/259)


### Features

* **create-twilio-function:** generate default config file ([a8b5d1e](https://github.com/twilio-labs/serverless-toolkit/commit/a8b5d1ee0d4111521698c39537892c106212d68b)), closes [#244](https://github.com/twilio-labs/serverless-toolkit/issues/244)





# [3.0.0-beta.6](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.0-beta.5...create-twilio-function@3.0.0-beta.6) (2021-05-13)

**Note:** Version bump only for package create-twilio-function





# [3.0.0-beta.5](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.0-beta.4...create-twilio-function@3.0.0-beta.5) (2021-05-01)

**Note:** Version bump only for package create-twilio-function





# [3.0.0-beta.4](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.0-beta.3...create-twilio-function@3.0.0-beta.4) (2021-04-30)


### chore

* remove Node.js 10 support ([#253](https://github.com/twilio-labs/serverless-toolkit/issues/253)) ([f6192fa](https://github.com/twilio-labs/serverless-toolkit/commit/f6192fad188a787dfbb7d1ed6a32f5d2baa4570c))


### BREAKING CHANGES

* Installing the new version on Node.js 10 will result in an error





# [3.0.0-beta.3](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.0-beta.2...create-twilio-function@3.0.0-beta.3) (2021-04-21)

**Note:** Version bump only for package create-twilio-function





# [3.0.0-beta.2](https://github.com/twilio-labs/serverless-toolkit/compare/create-twilio-function@3.0.0-beta.1...create-twilio-function@3.0.0-beta.2) (2021-04-21)

**Note:** Version bump only for package create-twilio-function





# 3.0.0-beta.1 (2021-04-21)


### Bug Fixes

* **create-twilio-function:** add early exit for invalid options ([3338e3d](https://github.com/twilio-labs/serverless-toolkit/commit/3338e3daff2b6d7a0931da5064d5088deb92d76d))


### Features

* **create-twilio-function:** adds twilio to default package.json ([#217](https://github.com/twilio-labs/serverless-toolkit/issues/217)) ([6ff8225](https://github.com/twilio-labs/serverless-toolkit/commit/6ff822586abd5c7cb486d03f482733a1a5b36039))
* **create-twilio-function:** update default Node.js version ([#231](https://github.com/twilio-labs/serverless-toolkit/issues/231)) ([064f8a5](https://github.com/twilio-labs/serverless-toolkit/commit/064f8a50e1bed0521f7845898ec604d7ad47837a))





# 3.0.0-beta.0 (2020-08-27)


### Bug Fixes

* **create-twilio-function:** add early exit for invalid options ([3338e3d](https://github.com/twilio-labs/serverless-toolkit/commit/3338e3daff2b6d7a0931da5064d5088deb92d76d))





# Changelog for `create-twilio-function`

## Ongoing [☰](https://github.com/twilio-labs/create-twilio-function/compare/v2.3.0...main)

## 2.2.0 (May 25, 2020) [☰](https://github.com/twilio-labs/create-twilio-function/compare/v2.2.0...v2.3.0)

- minor updates
  - Adds `--typescript` flag that generates a TypeScript project that can be built and deployed to Twilio Functions

## 2.2.0 (May 11, 2020) [☰](https://github.com/twilio-labs/create-twilio-function/compare/v2.1.0...v2.2.0)

- minor updates
  - Loosen the Node version to 10
  - Updates twilio-run to 2.5.0
  - Adds `--empty` option to create empty template

## 2.1.0 (January 14, 2020) [☰](https://github.com/twilio-labs/create-twilio-function/compare/v2.0.0...v2.1.0)

- minor updates
  - Validates project names. Names can only include letters, numbers and hyphens
  - Adds `npm run deploy` command to generated project which will run `twilio-run deploy`
  - Updates Node version output for new functions to 10.17 to match Twilio Functions environment
  - Adds a link to the Twilio console to the output asking for credentials
  - Lints the code according to eslint-config-twilio
  - Improves getting the size of the terminal for setting the output

## 2.0.0 (August 4, 2019) [☰](https://github.com/twilio-labs/create-twilio-function/compare/v1.0.2...v2.0.0)

- Exports details about the cli command so that other projects can consume it. Fixes #12
- Generates new project from the ./templates directory in this project
- Can generate projects based on a template from twilio-labs/function-templates

## 1.0.2 (July 10, 2019) [☰](https://github.com/twilio-labs/create-twilio-function/compare/v1.0.1...v1.0.2)

- Minor updates
  - Better error messages if the cli fails to create a directory. Fixes #14

## 1.0.1 (May 4, 2019) [☰](https://github.com/twilio-labs/create-twilio-function/compare/v1.0.0...v1.0.1)

- Minor updates
  - Corrected order of arguments in generated example function. Fixes #10

## 1.0.0 (April 9, 2019) [☰](https://github.com/twilio-labs/create-twilio-function/commits/v1.0.0)

Initial release. Includes basic features for creating a new Twilio Functions project setup to use [`twilio-run`](https://github.com/twilio-labs/twilio-run) to run locally.
