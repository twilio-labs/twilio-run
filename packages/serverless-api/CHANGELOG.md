# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.1.0-rc.0](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/serverless-api@5.0.0...@twilio-labs/serverless-api@5.1.0-rc.0) (2021-05-24)


### Features

* extract runtime-handler and lazyLoading ([#252](https://github.com/twilio-labs/serverless-toolkit/issues/252)) ([4b11e69](https://github.com/twilio-labs/serverless-toolkit/commit/4b11e693248e44a8c6db4a95cf90e79e00f7db08))





# [5.0.0](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/serverless-api@5.0.0-beta.6...@twilio-labs/serverless-api@5.0.0) (2021-05-19)

**Note:** Version bump only for package @twilio-labs/serverless-api





# [5.0.0-beta.6](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/serverless-api@5.0.0-beta.5...@twilio-labs/serverless-api@5.0.0-beta.6) (2021-05-17)


### Bug Fixes

* **twilio-run:** show service sid if available instead of name ([#265](https://github.com/twilio-labs/serverless-toolkit/issues/265)) ([816a26f](https://github.com/twilio-labs/serverless-toolkit/commit/816a26f7d64ed4193cd02a68abc8667334001771)), closes [#262](https://github.com/twilio-labs/serverless-toolkit/issues/262)


### BREAKING CHANGES

* **twilio-run:** The output of the config info in deployment changed





# [5.0.0-beta.5](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/serverless-api@5.0.0-beta.4...@twilio-labs/serverless-api@5.0.0-beta.5) (2021-05-13)


### Bug Fixes

* **serverless-api:** fixes assets paths in deployment ([#258](https://github.com/twilio-labs/serverless-toolkit/issues/258)) ([e37ecb3](https://github.com/twilio-labs/serverless-toolkit/commit/e37ecb336eaec74130d98066a63b858d71f26f62))





# [5.0.0-beta.4](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/serverless-api@5.0.0-beta.3...@twilio-labs/serverless-api@5.0.0-beta.4) (2021-04-30)


### Bug Fixes

* **assets, serverless-api:** uri encode path names for asset versions ([c2b1f3d](https://github.com/twilio-labs/serverless-toolkit/commit/c2b1f3d16ce6af31ef2aaa1d086b3565bbcd1c7d))


### Features

* **plugin-assets:** first version of working assets plugin ([4ee08d3](https://github.com/twilio-labs/serverless-toolkit/commit/4ee08d3ebcb82abe1cb11752d45021f2ca3e03c6))





# [5.0.0-beta.3](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/serverless-api@5.0.0-beta.2...@twilio-labs/serverless-api@5.0.0-beta.3) (2021-04-21)

**Note:** Version bump only for package @twilio-labs/serverless-api





# [5.0.0-beta.2](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/serverless-api@5.0.0-beta.1...@twilio-labs/serverless-api@5.0.0-beta.2) (2021-04-21)

**Note:** Version bump only for package @twilio-labs/serverless-api





# 5.0.0-beta.1 (2021-04-21)


* feat!: introduce rate limiting (#42) ([902e749](https://github.com/twilio-labs/serverless-toolkit/commit/902e749084b96fd6d2ee96e89477aa0da7f94dfc)), closes [#42](https://github.com/twilio-labs/serverless-toolkit/issues/42) [#37](https://github.com/twilio-labs/serverless-toolkit/issues/37)


### Bug Fixes

* **activate:** activating with environment variables ([#49](https://github.com/twilio-labs/serverless-toolkit/issues/49)) ([9e05152](https://github.com/twilio-labs/serverless-toolkit/commit/9e05152c9fbb57c403fc2d2a99f9358ca825008d))
* **api:** update form field names to work with serverless-api ([777dbe4](https://github.com/twilio-labs/serverless-toolkit/commit/777dbe4dfe9e38ff9312619f36893e8a3defacea))
* **api:** use new uploads API ([#9](https://github.com/twilio-labs/serverless-toolkit/issues/9)) ([998f83a](https://github.com/twilio-labs/serverless-toolkit/commit/998f83a6c52fafd08af2484f4c34bd4b7543b5dc))
* **assets:** enable protected asset upload ([fdb7ee8](https://github.com/twilio-labs/serverless-toolkit/commit/fdb7ee8aa7f994b5c78869e65287a3669c130f0f))
* **build:** reject promise on failed build ([afa2f8c](https://github.com/twilio-labs/serverless-toolkit/commit/afa2f8c655596181764df93fa90ab9ad2493336f)), closes [#15](https://github.com/twilio-labs/serverless-toolkit/issues/15)
* **builds:** support more than one fn/asset ([bbdbd82](https://github.com/twilio-labs/serverless-toolkit/commit/bbdbd82696e7d044ea667ac0f97ae041e357b7f6))
* **client:** fix client service error information ([#10](https://github.com/twilio-labs/serverless-toolkit/issues/10)) ([93950e0](https://github.com/twilio-labs/serverless-toolkit/commit/93950e041efbe24766bfa122e9c0e4b351b1e61a))
* **content-type:** change content type detection to take hint ([#34](https://github.com/twilio-labs/serverless-toolkit/issues/34)) ([fac52fb](https://github.com/twilio-labs/serverless-toolkit/commit/fac52fb6321bb84806e9ed1d293b673d4e020131))
* **deploy:** stop creating environments with domain suffix 'undefined' ([#50](https://github.com/twilio-labs/serverless-toolkit/issues/50)) ([ad4817f](https://github.com/twilio-labs/serverless-toolkit/commit/ad4817f753221aa6b7879e0deba23a562f40eb4d))
* **environments:** fix deploying to production ([#16](https://github.com/twilio-labs/serverless-toolkit/issues/16)) ([fc09142](https://github.com/twilio-labs/serverless-toolkit/commit/fc09142c1b19efd3e628efa74d11c5ee2aca24b6))
* **functions:** support private functions ([#30](https://github.com/twilio-labs/serverless-toolkit/issues/30)) ([34ecf86](https://github.com/twilio-labs/serverless-toolkit/commit/34ecf869d631e0117b4516e76ffaa85233d1ae53))
* **logs:** fix typo in debug logs ([eca8f38](https://github.com/twilio-labs/serverless-toolkit/commit/eca8f38e7d0d76d97fd8a06ab2e89e4d4c9014e5))
* **logs:** redact tokens/passwords/env vars from logs ([59b6d4e](https://github.com/twilio-labs/serverless-toolkit/commit/59b6d4e771cfbd217ca63cbe2ddce9abcbe1756b))
* **paths:** add path verification ([#31](https://github.com/twilio-labs/serverless-toolkit/issues/31)) ([cd239bd](https://github.com/twilio-labs/serverless-toolkit/commit/cd239bd6178d6256d1314c5fd0861fccfc87e440))
* **serverless-api:** add request url to API error logs ([#241](https://github.com/twilio-labs/serverless-toolkit/issues/241)) ([4e79890](https://github.com/twilio-labs/serverless-toolkit/commit/4e7989054f9ff2b749ed9c019f1f4b19f679032f)), closes [#167](https://github.com/twilio-labs/serverless-toolkit/issues/167)
* **serverless-api:** explicitly enable credentials ([90a3e63](https://github.com/twilio-labs/serverless-toolkit/commit/90a3e63921ce886dd8aa578c7ad528d0626681a5))
* **serverless-api:** pagination was broken ([92812b7](https://github.com/twilio-labs/serverless-toolkit/commit/92812b701527cc7509b30d9daf8d75929e333077))
* **serverless-api:** retries on 429 error for POST request ([4533fcd](https://github.com/twilio-labs/serverless-toolkit/commit/4533fcdd634d492b3b16477ca93d97e7ff9ce9d9))
* **serverless-api:** use new /Status endpoint for builds ([#239](https://github.com/twilio-labs/serverless-toolkit/issues/239)) ([6624e5d](https://github.com/twilio-labs/serverless-toolkit/commit/6624e5d6f567fbd79f2541fe60b303550f7f2ec8)), closes [#193](https://github.com/twilio-labs/serverless-toolkit/issues/193)
* **serverless-api/logs:** change log polling cache ([2142867](https://github.com/twilio-labs/serverless-toolkit/commit/2142867d252fdbdff4d1bae54b559497517c95ef))
* **serverless-api/logs:** keeps the most recent logs in log cache ([0f3b317](https://github.com/twilio-labs/serverless-toolkit/commit/0f3b31797dade038f426f1d30d1e60fbcafcb817))
* **types:** expose friendly_name on environments ([56df438](https://github.com/twilio-labs/serverless-toolkit/commit/56df438ef2ca94f81185a95c124c59b0c0673548))
* add file name on failing asset upload error ([#47](https://github.com/twilio-labs/serverless-toolkit/issues/47)) ([3c9e9ec](https://github.com/twilio-labs/serverless-toolkit/commit/3c9e9ecea8c06daf3ad04292a944d213d1ccc735))
* add pagination to list requests ([#1](https://github.com/twilio-labs/serverless-toolkit/issues/1)) ([#13](https://github.com/twilio-labs/serverless-toolkit/issues/13)) ([bd3d3df](https://github.com/twilio-labs/serverless-toolkit/commit/bd3d3df0b6c5d485addbc7141ac0a75d22036c00))
* change resource paths for nested Windows directories ([#11](https://github.com/twilio-labs/serverless-toolkit/issues/11)) ([8fcd0b3](https://github.com/twilio-labs/serverless-toolkit/commit/8fcd0b382c1f43ba80db7a538d7fb1e5a5b7a098))
* detect DEBUG flag on client creation ([29853bb](https://github.com/twilio-labs/serverless-toolkit/commit/29853bb3ebc9eb6d65ecb900c2ceb8fab159c1e3)), closes [twilio-labs/twilio-run#50](https://github.com/twilio-labs/twilio-run/issues/50)
* upgrade type-fest from 0.15.1 to 0.16.0 ([65b81a9](https://github.com/twilio-labs/serverless-toolkit/commit/65b81a996b231827c4e42985f76c2b1725351c87))


### Features

* add region support ([#39](https://github.com/twilio-labs/serverless-toolkit/issues/39)) ([11e674f](https://github.com/twilio-labs/serverless-toolkit/commit/11e674fce011b5a27bc094d2e000e0c60cb95265))
* add tests for asset error ([#47](https://github.com/twilio-labs/serverless-toolkit/issues/47)) ([63ae1fb](https://github.com/twilio-labs/serverless-toolkit/commit/63ae1fbf5f43e6bda95c0c71b9ee368a4ad7acbd))
* allow to work behind a proxy by setting the HTTP_PROXY env var ([51a0a3b](https://github.com/twilio-labs/serverless-toolkit/commit/51a0a3b6a208dd2c172d829dadbf9b8760dcdd63))
* expose createFunctionResource - fix [#3](https://github.com/twilio-labs/serverless-toolkit/issues/3) ([#4](https://github.com/twilio-labs/serverless-toolkit/issues/4)) ([c28e174](https://github.com/twilio-labs/serverless-toolkit/commit/c28e17474b4203f05e0bfb94df17d7d0329c6092))
* replace projectName with serviceName for consistency ([2e35c8b](https://github.com/twilio-labs/serverless-toolkit/commit/2e35c8b9e5df62235458aa5c33dad716e72e135a)), closes [twilio-labs/twilio-run#17](https://github.com/twilio-labs/twilio-run/issues/17)
* unify error interface & upgrade got ([#29](https://github.com/twilio-labs/serverless-toolkit/issues/29)) ([b27ae79](https://github.com/twilio-labs/serverless-toolkit/commit/b27ae79bf4af763ae80d17b9c7849fe6756abb1e))
* **client:** adds username and password support ([#51](https://github.com/twilio-labs/serverless-toolkit/issues/51)) ([d3dc471](https://github.com/twilio-labs/serverless-toolkit/commit/d3dc47192753351a68adce7897d6527dff7b54ec)), closes [#41](https://github.com/twilio-labs/serverless-toolkit/issues/41)
* **client:** expose domain in activate command ([d0294b5](https://github.com/twilio-labs/serverless-toolkit/commit/d0294b5c8018ea76b4cb9b51b61f02db100341ab)), closes [twilio-labs/twilio-run#37](https://github.com/twilio-labs/twilio-run/issues/37)
* **deploy:** adds runtime as a flag to the deploy command ([#218](https://github.com/twilio-labs/serverless-toolkit/issues/218)) ([789ec02](https://github.com/twilio-labs/serverless-toolkit/commit/789ec027f1151be156e1fb01b4e4110ca0de9c44))
* **environments:** make naming of environments predictable ([8f97342](https://github.com/twilio-labs/serverless-toolkit/commit/8f973426b19101dc0472a51caf611e2d61b12fef)), closes [#6](https://github.com/twilio-labs/serverless-toolkit/issues/6)
* **functions:** list function versions & download content ([#52](https://github.com/twilio-labs/serverless-toolkit/issues/52)) ([e32f770](https://github.com/twilio-labs/serverless-toolkit/commit/e32f770a57ee0b77f667e6ebe079c0aa2f67c60e))
* **logs:** add logs fetching and streaming ([#23](https://github.com/twilio-labs/serverless-toolkit/issues/23)) ([883dbdf](https://github.com/twilio-labs/serverless-toolkit/commit/883dbdfe6a7c9c295149e65ab683d658464ffc6c))
* **logs:** implements fetch and list of logs ([#12](https://github.com/twilio-labs/serverless-toolkit/issues/12)) ([c36a786](https://github.com/twilio-labs/serverless-toolkit/commit/c36a7868fff87dc596659226a0ff9704bc969eab))


### Reverts

* **environments:** revert back to old unique_name annotation ([af2d876](https://github.com/twilio-labs/serverless-toolkit/commit/af2d876dbd7878747560c0ddb6dcbde107b49d85))


### BREAKING CHANGES

* the function signature of the individual functions changed. If you only use the methods on the client, nothing should have changed.
* **api:** Removes uploadToAws as a function
* projectName is no longer valid and serviceName has to be used instead





# 5.0.0-beta.0 (2020-08-27)


* feat!: introduce rate limiting (#42) ([902e749](https://github.com/twilio-labs/serverless-toolkit/commit/902e749084b96fd6d2ee96e89477aa0da7f94dfc)), closes [#42](https://github.com/twilio-labs/serverless-toolkit/issues/42) [#37](https://github.com/twilio-labs/serverless-toolkit/issues/37)


### Bug Fixes

* **activate:** activating with environment variables ([#49](https://github.com/twilio-labs/serverless-toolkit/issues/49)) ([9e05152](https://github.com/twilio-labs/serverless-toolkit/commit/9e05152c9fbb57c403fc2d2a99f9358ca825008d))
* **api:** update form field names to work with serverless-api ([777dbe4](https://github.com/twilio-labs/serverless-toolkit/commit/777dbe4dfe9e38ff9312619f36893e8a3defacea))
* **api:** use new uploads API ([#9](https://github.com/twilio-labs/serverless-toolkit/issues/9)) ([998f83a](https://github.com/twilio-labs/serverless-toolkit/commit/998f83a6c52fafd08af2484f4c34bd4b7543b5dc))
* **assets:** enable protected asset upload ([fdb7ee8](https://github.com/twilio-labs/serverless-toolkit/commit/fdb7ee8aa7f994b5c78869e65287a3669c130f0f))
* **build:** reject promise on failed build ([afa2f8c](https://github.com/twilio-labs/serverless-toolkit/commit/afa2f8c655596181764df93fa90ab9ad2493336f)), closes [#15](https://github.com/twilio-labs/serverless-toolkit/issues/15)
* **builds:** support more than one fn/asset ([bbdbd82](https://github.com/twilio-labs/serverless-toolkit/commit/bbdbd82696e7d044ea667ac0f97ae041e357b7f6))
* **client:** fix client service error information ([#10](https://github.com/twilio-labs/serverless-toolkit/issues/10)) ([93950e0](https://github.com/twilio-labs/serverless-toolkit/commit/93950e041efbe24766bfa122e9c0e4b351b1e61a))
* **content-type:** change content type detection to take hint ([#34](https://github.com/twilio-labs/serverless-toolkit/issues/34)) ([fac52fb](https://github.com/twilio-labs/serverless-toolkit/commit/fac52fb6321bb84806e9ed1d293b673d4e020131))
* **deploy:** stop creating environments with domain suffix 'undefined' ([#50](https://github.com/twilio-labs/serverless-toolkit/issues/50)) ([ad4817f](https://github.com/twilio-labs/serverless-toolkit/commit/ad4817f753221aa6b7879e0deba23a562f40eb4d))
* **environments:** fix deploying to production ([#16](https://github.com/twilio-labs/serverless-toolkit/issues/16)) ([fc09142](https://github.com/twilio-labs/serverless-toolkit/commit/fc09142c1b19efd3e628efa74d11c5ee2aca24b6))
* **functions:** support private functions ([#30](https://github.com/twilio-labs/serverless-toolkit/issues/30)) ([34ecf86](https://github.com/twilio-labs/serverless-toolkit/commit/34ecf869d631e0117b4516e76ffaa85233d1ae53))
* **logs:** fix typo in debug logs ([eca8f38](https://github.com/twilio-labs/serverless-toolkit/commit/eca8f38e7d0d76d97fd8a06ab2e89e4d4c9014e5))
* **logs:** redact tokens/passwords/env vars from logs ([59b6d4e](https://github.com/twilio-labs/serverless-toolkit/commit/59b6d4e771cfbd217ca63cbe2ddce9abcbe1756b))
* add file name on failing asset upload error ([#47](https://github.com/twilio-labs/serverless-toolkit/issues/47)) ([3c9e9ec](https://github.com/twilio-labs/serverless-toolkit/commit/3c9e9ecea8c06daf3ad04292a944d213d1ccc735))
* **paths:** add path verification ([#31](https://github.com/twilio-labs/serverless-toolkit/issues/31)) ([cd239bd](https://github.com/twilio-labs/serverless-toolkit/commit/cd239bd6178d6256d1314c5fd0861fccfc87e440))
* **serverless-api:** retries on 429 error for POST request ([4533fcd](https://github.com/twilio-labs/serverless-toolkit/commit/4533fcdd634d492b3b16477ca93d97e7ff9ce9d9))
* **types:** expose friendly_name on environments ([56df438](https://github.com/twilio-labs/serverless-toolkit/commit/56df438ef2ca94f81185a95c124c59b0c0673548))
* add pagination to list requests ([#1](https://github.com/twilio-labs/serverless-toolkit/issues/1)) ([#13](https://github.com/twilio-labs/serverless-toolkit/issues/13)) ([bd3d3df](https://github.com/twilio-labs/serverless-toolkit/commit/bd3d3df0b6c5d485addbc7141ac0a75d22036c00))
* change resource paths for nested Windows directories ([#11](https://github.com/twilio-labs/serverless-toolkit/issues/11)) ([8fcd0b3](https://github.com/twilio-labs/serverless-toolkit/commit/8fcd0b382c1f43ba80db7a538d7fb1e5a5b7a098))
* detect DEBUG flag on client creation ([29853bb](https://github.com/twilio-labs/serverless-toolkit/commit/29853bb3ebc9eb6d65ecb900c2ceb8fab159c1e3)), closes [twilio-labs/twilio-run#50](https://github.com/twilio-labs/twilio-run/issues/50)
* upgrade type-fest from 0.15.1 to 0.16.0 ([65b81a9](https://github.com/twilio-labs/serverless-toolkit/commit/65b81a996b231827c4e42985f76c2b1725351c87))


### Features

* add region support ([#39](https://github.com/twilio-labs/serverless-toolkit/issues/39)) ([11e674f](https://github.com/twilio-labs/serverless-toolkit/commit/11e674fce011b5a27bc094d2e000e0c60cb95265))
* add tests for asset error ([#47](https://github.com/twilio-labs/serverless-toolkit/issues/47)) ([63ae1fb](https://github.com/twilio-labs/serverless-toolkit/commit/63ae1fbf5f43e6bda95c0c71b9ee368a4ad7acbd))
* expose createFunctionResource - fix [#3](https://github.com/twilio-labs/serverless-toolkit/issues/3) ([#4](https://github.com/twilio-labs/serverless-toolkit/issues/4)) ([c28e174](https://github.com/twilio-labs/serverless-toolkit/commit/c28e17474b4203f05e0bfb94df17d7d0329c6092))
* **logs:** add logs fetching and streaming ([#23](https://github.com/twilio-labs/serverless-toolkit/issues/23)) ([883dbdf](https://github.com/twilio-labs/serverless-toolkit/commit/883dbdfe6a7c9c295149e65ab683d658464ffc6c))
* replace projectName with serviceName for consistency ([2e35c8b](https://github.com/twilio-labs/serverless-toolkit/commit/2e35c8b9e5df62235458aa5c33dad716e72e135a)), closes [twilio-labs/twilio-run#17](https://github.com/twilio-labs/twilio-run/issues/17)
* unify error interface & upgrade got ([#29](https://github.com/twilio-labs/serverless-toolkit/issues/29)) ([b27ae79](https://github.com/twilio-labs/serverless-toolkit/commit/b27ae79bf4af763ae80d17b9c7849fe6756abb1e))
* **client:** adds username and password support ([#51](https://github.com/twilio-labs/serverless-toolkit/issues/51)) ([d3dc471](https://github.com/twilio-labs/serverless-toolkit/commit/d3dc47192753351a68adce7897d6527dff7b54ec)), closes [#41](https://github.com/twilio-labs/serverless-toolkit/issues/41)
* **client:** expose domain in activate command ([d0294b5](https://github.com/twilio-labs/serverless-toolkit/commit/d0294b5c8018ea76b4cb9b51b61f02db100341ab)), closes [twilio-labs/twilio-run#37](https://github.com/twilio-labs/twilio-run/issues/37)
* **environments:** make naming of environments predictable ([8f97342](https://github.com/twilio-labs/serverless-toolkit/commit/8f973426b19101dc0472a51caf611e2d61b12fef)), closes [#6](https://github.com/twilio-labs/serverless-toolkit/issues/6)
* **functions:** list function versions & download content ([#52](https://github.com/twilio-labs/serverless-toolkit/issues/52)) ([e32f770](https://github.com/twilio-labs/serverless-toolkit/commit/e32f770a57ee0b77f667e6ebe079c0aa2f67c60e))
* **logs:** implements fetch and list of logs ([#12](https://github.com/twilio-labs/serverless-toolkit/issues/12)) ([c36a786](https://github.com/twilio-labs/serverless-toolkit/commit/c36a7868fff87dc596659226a0ff9704bc969eab))


### Reverts

* **environments:** revert back to old unique_name annotation ([af2d876](https://github.com/twilio-labs/serverless-toolkit/commit/af2d876dbd7878747560c0ddb6dcbde107b49d85))


### BREAKING CHANGES

* the function signature of the individual functions changed. If you only use the methods on the client, nothing should have changed.
* **api:** Removes uploadToAws as a function
* projectName is no longer valid and serviceName has to be used instead





# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.1](https://github.com/twilio-labs/serverless-api/compare/v4.0.0...v4.0.1) (2020-07-28)


### Bug Fixes

* upgrade type-fest from 0.15.1 to 0.16.0 ([bfbcdc9](https://github.com/twilio-labs/serverless-api/commit/bfbcdc9b281ea94477f8f2c88c0a9fc7a36a9214))

## [4.0.0](https://github.com/twilio-labs/serverless-api/compare/v3.0.0...v4.0.0) (2020-07-06)


### Features

* add tests for asset error ([#47](https://github.com/twilio-labs/serverless-api/issues/47)) ([581e4ce](https://github.com/twilio-labs/serverless-api/commit/581e4ce7bde33c06e394819f749dc09fee1fdd19))
* **client:** adds username and password support ([#51](https://github.com/twilio-labs/serverless-api/issues/51)) ([80ffe00](https://github.com/twilio-labs/serverless-api/commit/80ffe008a2db0b2d2aa294328a35e0d3c359a19a)), closes [#41](https://github.com/twilio-labs/serverless-api/issues/41)
* **functions:** list function versions & download content ([#52](https://github.com/twilio-labs/serverless-api/issues/52)) ([045a90a](https://github.com/twilio-labs/serverless-api/commit/045a90a536e850f84388cc5dcc06e6f2c0c7b9b5))


### Bug Fixes

* add file name on failing asset upload error ([#47](https://github.com/twilio-labs/serverless-api/issues/47)) ([13fedb2](https://github.com/twilio-labs/serverless-api/commit/13fedb2544acda4d38928fde035eb15783432485))
* **activate:** activating with environment variables ([#49](https://github.com/twilio-labs/serverless-api/issues/49)) ([62c2af6](https://github.com/twilio-labs/serverless-api/commit/62c2af664e56197034f263a309fd73b50d7f38a9))
* **deploy:** stop creating environments with domain suffix 'undefined' ([#50](https://github.com/twilio-labs/serverless-api/issues/50)) ([f5dde4c](https://github.com/twilio-labs/serverless-api/commit/f5dde4c55997d6214f8b930a2dc09a0f09c01e66))

### [3.1.1](https://github.com/twilio-labs/serverless-api/compare/v3.1.0...v3.1.1) (2020-06-25)


### Bug Fixes

* **deploy:** stop creating environments with domain suffix 'undefined' ([#50](https://github.com/twilio-labs/serverless-api/issues/50)) ([f5dde4c](https://github.com/twilio-labs/serverless-api/commit/f5dde4c55997d6214f8b930a2dc09a0f09c01e66))

## [3.1.0](https://github.com/twilio-labs/serverless-api/compare/v3.0.0...v3.1.0) (2020-06-16)


### Features

* add tests for asset error ([#47](https://github.com/twilio-labs/serverless-api/issues/47)) ([581e4ce](https://github.com/twilio-labs/serverless-api/commit/581e4ce7bde33c06e394819f749dc09fee1fdd19))


### Bug Fixes

* **activate:** activating with environment variables ([#49](https://github.com/twilio-labs/serverless-api/issues/49)) ([62c2af6](https://github.com/twilio-labs/serverless-api/commit/62c2af664e56197034f263a309fd73b50d7f38a9))
* add file name on failing asset upload error ([#47](https://github.com/twilio-labs/serverless-api/issues/47)) ([13fedb2](https://github.com/twilio-labs/serverless-api/commit/13fedb2544acda4d38928fde035eb15783432485))

## [3.0.0](https://github.com/twilio-labs/serverless-api/compare/v2.1.0...v3.0.0) (2020-05-21)


### ⚠ BREAKING CHANGES

* the function signature of the individual functions changed. If you only use the methods on the client, nothing should have changed.

### Features

* introduce rate limiting ([#42](https://github.com/twilio-labs/serverless-api/issues/42)) ([6dc1bc4](https://github.com/twilio-labs/serverless-api/commit/6dc1bc43e7516d816a976ea190e7fc4b35a12f3f)), closes [#37](https://github.com/twilio-labs/serverless-api/issues/37)

## [2.1.0](https://github.com/twilio-labs/serverless-api/compare/v1.1.0...v2.1.0) (2020-05-18)


### Features

* add region support ([#39](https://github.com/twilio-labs/serverless-api/issues/39)) ([afe4149](https://github.com/twilio-labs/serverless-api/commit/afe414915932074f64148d94a778d6be8ea22b16))
* unify error interface & upgrade got ([#29](https://github.com/twilio-labs/serverless-api/issues/29)) ([a94e86e](https://github.com/twilio-labs/serverless-api/commit/a94e86ec3f0aabaea9a5bb8d4572ef83c397b504))


### Bug Fixes

* **builds:** support  more than one fn/asset ([0461068](https://github.com/twilio-labs/serverless-api/commit/046106827592b33e66a693b5774402255625a749))
* **content-type:** change content type detection to take hint ([#34](https://github.com/twilio-labs/serverless-api/issues/34)) ([3d96bc0](https://github.com/twilio-labs/serverless-api/commit/3d96bc0520a5aa00d5ee18e2fcc865b4a71a2cd7))
* **functions:** support private functions ([#30](https://github.com/twilio-labs/serverless-api/issues/30)) ([b58eac0](https://github.com/twilio-labs/serverless-api/commit/b58eac0259419a447f8cb9054428f2fe469165f0))
* **paths:** add path verification ([#31](https://github.com/twilio-labs/serverless-api/issues/31)) ([ea1a660](https://github.com/twilio-labs/serverless-api/commit/ea1a6603f1e20a8245ed79a4890fe1110cbce41e))


### Build System

* **npm:** remove shrinkwrap ([#36](https://github.com/twilio-labs/serverless-api/issues/36)) ([2c6fc78](https://github.com/twilio-labs/serverless-api/commit/2c6fc78895f34d20012ad3a82e09d0d3de98064e))

### [2.0.1](https://github.com/twilio-labs/serverless-api/compare/v1.1.0...v2.0.1) (2020-04-28)


### Bug Fixes

* **builds:** support  more than one fn/asset ([0461068](https://github.com/twilio-labs/serverless-api/commit/046106827592b33e66a693b5774402255625a749))


## [2.0.0](https://github.com/twilio-labs/serverless-api/compare/v1.1.0...v2.0.0) (2020-04-28)


### Features

* **[BREAKING CHANGE]** unify error interface & upgrade got ([#29](https://github.com/twilio-labs/serverless-api/issues/29)) ([a94e86e](https://github.com/twilio-labs/serverless-api/commit/a94e86ec3f0aabaea9a5bb8d4572ef83c397b504))


### Bug Fixes

* **[BREAKING CHANGE]** **content-type:** change content type detection to take hint ([#34](https://github.com/twilio-labs/serverless-api/issues/34)) ([3d96bc0](https://github.com/twilio-labs/serverless-api/commit/3d96bc0520a5aa00d5ee18e2fcc865b4a71a2cd7))
* **functions:** support private functions ([#30](https://github.com/twilio-labs/serverless-api/issues/30)) ([b58eac0](https://github.com/twilio-labs/serverless-api/commit/b58eac0259419a447f8cb9054428f2fe469165f0))
* **paths:** add path verification ([#31](https://github.com/twilio-labs/serverless-api/issues/31)) ([ea1a660](https://github.com/twilio-labs/serverless-api/commit/ea1a6603f1e20a8245ed79a4890fe1110cbce41e))


### Build System

* **npm:** remove shrinkwrap ([#36](https://github.com/twilio-labs/serverless-api/issues/36)) ([2c6fc78](https://github.com/twilio-labs/serverless-api/commit/2c6fc78895f34d20012ad3a82e09d0d3de98064e))

## [1.1.0](https://github.com/twilio-labs/serverless-api/compare/v1.0.3...v1.1.0) (2020-02-25)


### Features

* **logs:** add logs fetching and streaming ([#23](https://github.com/twilio-labs/serverless-api/issues/23)) ([f4f21b4](https://github.com/twilio-labs/serverless-api/commit/f4f21b4))



### [1.0.3](https://github.com/twilio-labs/serverless-api/compare/v1.0.2...v1.0.3) (2019-09-25)


### Bug Fixes

* **build:** reject promise on failed build ([47e03e0](https://github.com/twilio-labs/serverless-api/commit/47e03e0)), closes [#15](https://github.com/twilio-labs/serverless-api/issues/15)
* **environments:** fix deploying to production ([#16](https://github.com/twilio-labs/serverless-api/issues/16)) ([9585237](https://github.com/twilio-labs/serverless-api/commit/9585237))



### [1.0.2](https://github.com/twilio-labs/serverless-api/compare/v1.0.1...v1.0.2) (2019-08-05)



### [1.0.1](https://github.com/twilio-labs/serverless-api/compare/v1.0.0...v1.0.1) (2019-08-05)


### Bug Fixes

* add pagination to list requests ([#1](https://github.com/twilio-labs/serverless-api/issues/1)) ([#13](https://github.com/twilio-labs/serverless-api/issues/13)) ([a57f997](https://github.com/twilio-labs/serverless-api/commit/a57f997))



## [1.0.0](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-rc.5...v1.0.0) (2019-08-05)


### Features

* **logs:** implements fetch and list of logs ([#12](https://github.com/twilio-labs/serverless-api/issues/12)) ([87695cd](https://github.com/twilio-labs/serverless-api/commit/87695cd))



## [1.0.0-rc.5](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2019-08-01)


### Bug Fixes

* change resource paths for nested Windows directories ([#11](https://github.com/twilio-labs/serverless-api/issues/11)) ([9c74b44](https://github.com/twilio-labs/serverless-api/commit/9c74b44))



## [1.0.0-rc.4](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2019-07-30)


### Bug Fixes

* detect DEBUG flag on client creation ([2477d2e](https://github.com/twilio-labs/serverless-api/commit/2477d2e)), closes [twilio-labs/twilio-run#50](https://github.com/twilio-labs/serverless-api/issues/50)



## [1.0.0-rc.3](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2019-07-30)


### Bug Fixes

* **assets:** enable protected asset upload ([87db602](https://github.com/twilio-labs/serverless-api/commit/87db602))



## [1.0.0-rc.2](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2019-07-25)


### Bug Fixes

* **client:** fix client service error information ([#10](https://github.com/twilio-labs/serverless-api/issues/10)) ([00ba21a](https://github.com/twilio-labs/serverless-api/commit/00ba21a))



## [1.0.0-rc.1](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2019-07-25)


### Bug Fixes

* **api:** update form field names to work with serverless-api ([2282def](https://github.com/twilio-labs/serverless-api/commit/2282def))



## [1.0.0-rc.0](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-alpha.19...v1.0.0-rc.0) (2019-07-24)


### Bug Fixes

* **api:** use new uploads API ([#9](https://github.com/twilio-labs/serverless-api/issues/9)) ([b349a1e](https://github.com/twilio-labs/serverless-api/commit/b349a1e))
* **types:** expose friendly_name on environments ([df4cc28](https://github.com/twilio-labs/serverless-api/commit/df4cc28))


### Features

* **environments:** make naming of environments predictable ([68c51eb](https://github.com/twilio-labs/serverless-api/commit/68c51eb)), closes [#6](https://github.com/twilio-labs/serverless-api/issues/6)


### BREAKING CHANGES

* **api:** Removes uploadToAws as a function



## [1.0.0-alpha.19](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-alpha.18...v1.0.0-alpha.19) (2019-07-20)


### Bug Fixes

* **logs:** redact tokens/passwords/env vars from logs ([8ca6e3d](https://github.com/twilio-labs/serverless-api/commit/8ca6e3d))



## [1.0.0-alpha.18](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-alpha.17...v1.0.0-alpha.18) (2019-07-19)


### Features

* **client:** expose domain in activate command ([8283662](https://github.com/twilio-labs/serverless-api/commit/8283662)), closes [twilio-labs/twilio-run#37](https://github.com/twilio-labs/serverless-api/issues/37)



## [1.0.0-alpha.17](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-alpha.16...v1.0.0-alpha.17) (2019-07-19)



## [1.0.0-alpha.16](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-alpha.15...v1.0.0-alpha.16) (2019-07-18)


### Bug Fixes

* **logs:** fix typo in debug logs ([e558e79](https://github.com/twilio-labs/serverless-api/commit/e558e79))


### Features

* expose createFunctionResource - fix [#3](https://github.com/twilio-labs/serverless-api/issues/3) ([#4](https://github.com/twilio-labs/serverless-api/issues/4)) ([5279169](https://github.com/twilio-labs/serverless-api/commit/5279169))



## [1.0.0-alpha.15](https://github.com/twilio-labs/serverless-api/compare/v1.0.0-alpha.14...v1.0.0-alpha.15) (2019-07-10)


### Build System

* **npm:** setup git hooks and linters ([d0e404c](https://github.com/twilio-labs/serverless-api/commit/d0e404c))


### Features

* replace projectName with serviceName for consistency ([c4f955a](https://github.com/twilio-labs/serverless-api/commit/c4f955a)), closes [twilio-labs/twilio-run#17](https://github.com/twilio-labs/serverless-api/issues/17)


### BREAKING CHANGES

* projectName is no longer valid and serviceName has to be used instead
