# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.1.0-rc.0](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.1...twilio-run@3.1.0-rc.0) (2021-05-24)


### Features

* extract runtime-handler and lazyLoading ([#252](https://github.com/twilio-labs/serverless-toolkit/issues/252)) ([4b11e69](https://github.com/twilio-labs/serverless-toolkit/commit/4b11e693248e44a8c6db4a95cf90e79e00f7db08))





## [3.0.1](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.0...twilio-run@3.0.1) (2021-05-20)


### Bug Fixes

* **twilio-run:** fix global scope in forked process ([#270](https://github.com/twilio-labs/serverless-toolkit/issues/270)) ([d705f8e](https://github.com/twilio-labs/serverless-toolkit/commit/d705f8eab7b4b11bb6131e46217ac0b6d0d40425))





# [3.0.0](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.0-beta.7...twilio-run@3.0.0) (2021-05-19)


### Bug Fixes

* **twilio-run:** fix upgrade script for empty legacy files ([#269](https://github.com/twilio-labs/serverless-toolkit/issues/269)) ([a24f9be](https://github.com/twilio-labs/serverless-toolkit/commit/a24f9beb1d2c322ac2e64099a449b15e1823ab7c))





# [3.0.0-beta.7](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.0-beta.6...twilio-run@3.0.0-beta.7) (2021-05-17)


### Bug Fixes

* **twilio-run:** remove api flags from start command ([#264](https://github.com/twilio-labs/serverless-toolkit/issues/264)) ([51839e9](https://github.com/twilio-labs/serverless-toolkit/commit/51839e9ce789ea89f124950bfa398ce4af4dc69b)), closes [#260](https://github.com/twilio-labs/serverless-toolkit/issues/260)
* **twilio-run:** remove irrelevant config options ([8d400c6](https://github.com/twilio-labs/serverless-toolkit/commit/8d400c65abb796e5a75371e2f55eae4fa22dc69e)), closes [#243](https://github.com/twilio-labs/serverless-toolkit/issues/243)
* **twilio-run:** show service sid if available instead of name ([#265](https://github.com/twilio-labs/serverless-toolkit/issues/265)) ([816a26f](https://github.com/twilio-labs/serverless-toolkit/commit/816a26f7d64ed4193cd02a68abc8667334001771)), closes [#262](https://github.com/twilio-labs/serverless-toolkit/issues/262)


### BREAKING CHANGES

* **twilio-run:** The output of the config info in deployment changed





# [3.0.0-beta.6](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.0-beta.5...twilio-run@3.0.0-beta.6) (2021-05-13)


### Bug Fixes

* **twilio-run:** continue commands with no legacy config ([#257](https://github.com/twilio-labs/serverless-toolkit/issues/257)) ([fa8a3a8](https://github.com/twilio-labs/serverless-toolkit/commit/fa8a3a8416216e5a6213719d954737cf993d950d))
* **twilio-run:start:** load functions & assets in forked process ([#256](https://github.com/twilio-labs/serverless-toolkit/issues/256)) ([eec8110](https://github.com/twilio-labs/serverless-toolkit/commit/eec8110736df81662be69bc18885ac04b704472d))





# [3.0.0-beta.5](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.0-beta.4...twilio-run@3.0.0-beta.5) (2021-05-01)


### Bug Fixes

* **twilio-run:** fix migration script ([b15c3dd](https://github.com/twilio-labs/serverless-toolkit/commit/b15c3dd8b965284ff4d245b58b0639082401a620))





# [3.0.0-beta.4](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.0-beta.3...twilio-run@3.0.0-beta.4) (2021-04-30)


### chore

* remove Node.js 10 support ([#253](https://github.com/twilio-labs/serverless-toolkit/issues/253)) ([f6192fa](https://github.com/twilio-labs/serverless-toolkit/commit/f6192fad188a787dfbb7d1ed6a32f5d2baa4570c))


### Features

* **twilio-run:logs:** adds production flag ([#248](https://github.com/twilio-labs/serverless-toolkit/issues/248)) ([0327454](https://github.com/twilio-labs/serverless-toolkit/commit/0327454b749e424822f44e2274c3ba3a90a4461d)), closes [#208](https://github.com/twilio-labs/serverless-toolkit/issues/208)


### BREAKING CHANGES

* Installing the new version on Node.js 10 will result in an error





# [3.0.0-beta.3](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.0-beta.2...twilio-run@3.0.0-beta.3) (2021-04-21)

**Note:** Version bump only for package twilio-run





# [3.0.0-beta.2](https://github.com/twilio-labs/serverless-toolkit/compare/twilio-run@3.0.0-beta.1...twilio-run@3.0.0-beta.2) (2021-04-21)

**Note:** Version bump only for package twilio-run





# 3.0.0-beta.1 (2021-04-21)


* feat(twilio-run)!: enable process forking by default (#238) ([13b83b9](https://github.com/twilio-labs/serverless-toolkit/commit/13b83b987695e77ed8bd85c3aed10e567028e4fb)), closes [#238](https://github.com/twilio-labs/serverless-toolkit/issues/238) [#223](https://github.com/twilio-labs/serverless-toolkit/issues/223) [#135](https://github.com/twilio-labs/serverless-toolkit/issues/135)


### Bug Fixes

* **debugger:** fixes debugger redaction in plugin-serverless ([#187](https://github.com/twilio-labs/serverless-toolkit/issues/187)) ([4a0c04b](https://github.com/twilio-labs/serverless-toolkit/commit/4a0c04b04f5856c51d1d1c672ffc879c5a6882e9)), closes [#185](https://github.com/twilio-labs/serverless-toolkit/issues/185)
* add hidden logCacheSize option ([e8c02dc](https://github.com/twilio-labs/serverless-toolkit/commit/e8c02dc4469dd5dba6f7662750dae2446f6eb894))
* **deps:** npm is not happy about @types/qs ([0d4e6a8](https://github.com/twilio-labs/serverless-toolkit/commit/0d4e6a894d154996470b9ab4bdd9b72095b7bd94))
* **twilio-run:** change the url to the Twilio Console ([#236](https://github.com/twilio-labs/serverless-toolkit/issues/236)) ([d753af3](https://github.com/twilio-labs/serverless-toolkit/commit/d753af3393f75e96701022427f14c8e8837d4366))
* **twilio-run:** fixes indentation on deploy screen ([1dc9c69](https://github.com/twilio-labs/serverless-toolkit/commit/1dc9c691a99e9d6e1319b54595bd0cd6798c4c8b)), closes [#245](https://github.com/twilio-labs/serverless-toolkit/issues/245)
* **twilio-run:checks:** change to Node.js v12 check ([29f6547](https://github.com/twilio-labs/serverless-toolkit/commit/29f6547fa56ae851558e6c16e91ad8e9f9ad21df))
* **twilio-run:promote:** better error message for 409 error ([7a6a49f](https://github.com/twilio-labs/serverless-toolkit/commit/7a6a49f1e9fd477d1f1213fd96b759a7c73f0852)), closes [#171](https://github.com/twilio-labs/serverless-toolkit/issues/171)
* **twilio-run:runtime:** delete from require cache on page load in live ([#181](https://github.com/twilio-labs/serverless-toolkit/issues/181)) ([5108d30](https://github.com/twilio-labs/serverless-toolkit/commit/5108d307bace834452eae5b06924b9b538f16615))
* **twilio-run:start:** changing port numbers changes output ([#189](https://github.com/twilio-labs/serverless-toolkit/issues/189)) ([6f3ad06](https://github.com/twilio-labs/serverless-toolkit/commit/6f3ad06d094057f7fc718881ce4fea22fdbafb79)), closes [#188](https://github.com/twilio-labs/serverless-toolkit/issues/188)


### Features

* **deploy:** adds runtime as a flag to the deploy command ([#218](https://github.com/twilio-labs/serverless-toolkit/issues/218)) ([789ec02](https://github.com/twilio-labs/serverless-toolkit/commit/789ec027f1151be156e1fb01b4e4110ca0de9c44))
* **templating:** add support for .env.example files ([#235](https://github.com/twilio-labs/serverless-toolkit/issues/235)) ([9c40a7f](https://github.com/twilio-labs/serverless-toolkit/commit/9c40a7f5ff24ed49e982033eac548e458162d892))
* **twilio-run:** restructure configuration ([#198](https://github.com/twilio-labs/serverless-toolkit/issues/198)) ([f88d490](https://github.com/twilio-labs/serverless-toolkit/commit/f88d49027980ee4c4d7f630918f860a987f13887)), closes [#166](https://github.com/twilio-labs/serverless-toolkit/issues/166)
* **twilio-run:start:** handle OPTIONS requests for Functions ([#220](https://github.com/twilio-labs/serverless-toolkit/issues/220)) ([ad6ba06](https://github.com/twilio-labs/serverless-toolkit/commit/ad6ba06fa39dc996d80f29cc0ce4ee6659ec8c23))
* **twilio-run:start:** make ngrok optional and handle failure ([#207](https://github.com/twilio-labs/serverless-toolkit/issues/207)) ([3061015](https://github.com/twilio-labs/serverless-toolkit/commit/30610158d3e29a43e0ece91c2ad6253483699c37)), closes [#205](https://github.com/twilio-labs/serverless-toolkit/issues/205)
* **twilio-run:templates:** pull function-templates from main ([#182](https://github.com/twilio-labs/serverless-toolkit/issues/182)) ([8bbbc92](https://github.com/twilio-labs/serverless-toolkit/commit/8bbbc925532945da73949ff56624b2f376a8e8f3))
* check for legacy config ([#246](https://github.com/twilio-labs/serverless-toolkit/issues/246)) ([1aad8da](https://github.com/twilio-labs/serverless-toolkit/commit/1aad8dac44ebbae16651dc2bcb02780193a44481))


### BREAKING CHANGES

* Functions invokations are not separated from each other
* **twilio-run:** Drops support for .twilio-functions files and internally restructures activate
files to promote





# 3.0.0-beta.0 (2020-08-27)


### Bug Fixes

* **twilio-run:promote:** better error message for 409 error ([7a6a49f](https://github.com/twilio-labs/serverless-toolkit/commit/7a6a49f1e9fd477d1f1213fd96b759a7c73f0852)), closes [#171](https://github.com/twilio-labs/serverless-toolkit/issues/171)





# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.8.0](https://github.com/twilio-labs/twilio-run/compare/v2.8.0-beta.0...v2.8.0) (2020-08-07)


### Bug Fixes

* **env:** catch dotenv parsing error ([c8e327b](https://github.com/twilio-labs/twilio-run/commit/c8e327b9b6bed6573726e19e18e7ee8091b98cb5))
* upgrade type-fest from 0.6.0 to 0.15.1 ([d682b2d](https://github.com/twilio-labs/twilio-run/commit/d682b2dbd00d725578251f1efef66109fcd208f5))

## [2.8.0-beta.1](https://github.com/twilio-labs/twilio-run/compare/v2.7.0...v2.8.0-beta.1) (2020-07-08)


### Features

* add better system env support ([#146](https://github.com/twilio-labs/twilio-run/issues/146)) ([7411e33](https://github.com/twilio-labs/twilio-run/commit/7411e334ad2fa90a0610a7381e5e0b6ee8564f99)), closes [#144](https://github.com/twilio-labs/twilio-run/issues/144)
* **runtime:** experimental: load functions in a separate process ([#147](https://github.com/twilio-labs/twilio-run/issues/147)) ([0a4f542](https://github.com/twilio-labs/twilio-run/commit/0a4f542a8684606e6e4a739509c09124e91ce005))

## [2.8.0-beta.0](https://github.com/twilio-labs/twilio-run/compare/v2.7.0...v2.8.0-beta.0) (2020-07-08)


### Features

* add better system env support ([#146](https://github.com/twilio-labs/twilio-run/issues/146)) ([7411e33](https://github.com/twilio-labs/twilio-run/commit/7411e334ad2fa90a0610a7381e5e0b6ee8564f99)), closes [#144](https://github.com/twilio-labs/twilio-run/issues/144)
* **runtime:** experimental: load functions in a separate process ([#147](https://github.com/twilio-labs/twilio-run/issues/147)) ([0a4f542](https://github.com/twilio-labs/twilio-run/commit/0a4f542a8684606e6e4a739509c09124e91ce005))

## [2.7.0](https://github.com/twilio-labs/twilio-run/compare/v2.6.0...v2.7.0) (2020-06-16)


### Features

* **runtime:** add CORS headers to OPTIONS requests to assets ([#141](https://github.com/twilio-labs/twilio-run/issues/141)) ([46fffa0](https://github.com/twilio-labs/twilio-run/commit/46fffa06df53efc679a2048cab20f750a5f83ec3))


### Bug Fixes

* **activate:** prepare and pass env vars to serverless-api activateBuild ([#142](https://github.com/twilio-labs/twilio-run/issues/142)) ([808fe47](https://github.com/twilio-labs/twilio-run/commit/808fe476518363adf10ddc1d936bd454cba18afa)), closes [#109](https://github.com/twilio-labs/twilio-run/issues/109)

## [2.6.0](https://github.com/twilio-labs/twilio-run/compare/v2.5.0...v2.6.0) (2020-05-22)


### Features

* **flags:** expose region/edge flags ([#137](https://github.com/twilio-labs/twilio-run/issues/137)) ([4b50a67](https://github.com/twilio-labs/twilio-run/commit/4b50a671b8ccba5e69228b2b446501cf1e59dfb4))
* **start:** expose functions-folder and assets-folder options ([#139](https://github.com/twilio-labs/twilio-run/issues/139)) ([76b0b6a](https://github.com/twilio-labs/twilio-run/commit/76b0b6acf840d1bc775ddfc0c952517468d2ff41))


### Bug Fixes

* **server:** fix typescript build issue ([231f405](https://github.com/twilio-labs/twilio-run/commit/231f405dbb59e04e2fd30f2d31b188a642b59147))
* **tests:** fix ts typing error ([7df47fc](https://github.com/twilio-labs/twilio-run/commit/7df47fc09788029e0a923f26fc2cd5290b9966f4))


### Build System

* **test:** enable incremental builds ([f48733d](https://github.com/twilio-labs/twilio-run/commit/f48733d85a06ffb5e9cbf526d8ce2cad1e3308d6))
* **ts:** remove incremental builds ([d421a56](https://github.com/twilio-labs/twilio-run/commit/d421a564831b3d4aaf51c81007b043b4e8d5ee4d))


### Tests

* **filesystem:** fix tests for windows ([642cdfe](https://github.com/twilio-labs/twilio-run/commit/642cdfe2878629ff901f0bc1606693cabb403615))
* **mocks:** fix route tests by fixing mock ([d696e87](https://github.com/twilio-labs/twilio-run/commit/d696e873bbcb6bd0b5cae586b8b2e68e5a3e34b0))

## [2.5.0](https://github.com/twilio-labs/twilio-run/compare/v2.4.0...v2.5.0) (2020-05-07)


### Features

* **logger:** expose errors better & upgrade serverless ([#132](https://github.com/twilio-labs/twilio-run/issues/132)) ([525f70c](https://github.com/twilio-labs/twilio-run/commit/525f70cd65ea87ff0da89575c0db57ba5848212e))
* **start:** handle EADDRINUSE by asking for another port number ([#127](https://github.com/twilio-labs/twilio-run/issues/127)) ([f8e49b5](https://github.com/twilio-labs/twilio-run/commit/f8e49b5e126a1e34eae58e9b377b4e33ad42cd5c)), closes [#97](https://github.com/twilio-labs/twilio-run/issues/97)


### Bug Fixes

* **templates:** adds tests for getFiles and replaces Array.flat ([cd52b9a](https://github.com/twilio-labs/twilio-run/commit/cd52b9a4620069b1de2c888316cb2de119a5fb4a))
* **templating:** catch errors in command, not before ([#130](https://github.com/twilio-labs/twilio-run/issues/130)) ([966a089](https://github.com/twilio-labs/twilio-run/commit/966a08900b04085609c90200cf1b67708425190e))

## [2.4.0](https://github.com/twilio-labs/twilio-run/compare/v2.3.0...v2.4.0) (2020-04-01)


### Features

* **templates:** support nested templates to create nested routes ([#123](https://github.com/twilio-labs/twilio-run/issues/123)) ([773d073](https://github.com/twilio-labs/twilio-run/commit/773d073deb5827de5cb33b5480669dd82aa766a4)), closes [#122](https://github.com/twilio-labs/twilio-run/issues/122)

## [2.3.0](https://github.com/twilio-labs/twilio-run/compare/v2.2.1...v2.3.0) (2020-03-18)


### Features

* **logs:** adds command to access new logging functions ([#110](https://github.com/twilio-labs/twilio-run/issues/110)) ([ec4af4a](https://github.com/twilio-labs/twilio-run/commit/ec4af4abc08892e266a48940e51362e2cb139cbd))
* **templates:** add support for custom template URLs ([#115](https://github.com/twilio-labs/twilio-run/issues/115)) ([e105f36](https://github.com/twilio-labs/twilio-run/commit/e105f3666619925e12e3224bace926e55f33fcc4))
* **templates:** template README downloaded and saved to readmes… ([#116](https://github.com/twilio-labs/twilio-run/issues/116)) ([523e09a](https://github.com/twilio-labs/twilio-run/commit/523e09aa2f9c8e21656d34853e099ca7c006f9c8)), closes [#104](https://github.com/twilio-labs/twilio-run/issues/104)


### Bug Fixes

* changes pinned node version to 10.x ([0c5635d](https://github.com/twilio-labs/twilio-run/commit/0c5635da8d55dbdf4b71cf9c83b1475eeafc917f)), closes [#111](https://github.com/twilio-labs/twilio-run/issues/111)

### [2.2.1](https://github.com/twilio-labs/twilio-run/compare/v2.2.0...v2.2.1) (2020-02-03)


### Bug Fixes

* **activate:** remove required to flag because of production option ([21c8309](https://github.com/twilio-labs/twilio-run/commit/21c830903b9559718574ce630eba0cb3d3b13d65))

## [2.2.0](https://github.com/twilio-labs/twilio-run/compare/v2.1.1...v2.2.0) (2020-01-27)


### Features

* **activate:** change activate to alias, promote to command ([#95](https://github.com/twilio-labs/twilio-run/issues/95)) ([9b2a981](https://github.com/twilio-labs/twilio-run/commit/9b2a9813928b504481cdb2f061b399a9196075ec)), closes [twilio-labs/serverless-toolkit#8](https://github.com/twilio-labs/serverless-toolkit/issues/8)
* allow the same namespace but different files ([#92](https://github.com/twilio-labs/twilio-run/issues/92)) ([b4fde66](https://github.com/twilio-labs/twilio-run/commit/b4fde660d2eded1daf6a1933fd6f0e536626b05a))
* **server:** expose function path to context ([95866a7](https://github.com/twilio-labs/twilio-run/commit/95866a75d96418777e22e40e084785e40aacc47c))
* support loading of new files automatically with `--live` ([#94](https://github.com/twilio-labs/twilio-run/issues/94)) ([955efbe](https://github.com/twilio-labs/twilio-run/commit/955efbed093e4fa8cd8a306100bba012f7bffd20))
* **server:** hide internals from stack trace ([#105](https://github.com/twilio-labs/twilio-run/issues/105)) ([f965275](https://github.com/twilio-labs/twilio-run/commit/f965275182e2749f0054993b156bf1e5370a345c))
* **templates:** report GitHub api error ([#86](https://github.com/twilio-labs/twilio-run/issues/86)) ([1de3853](https://github.com/twilio-labs/twilio-run/commit/1de3853275417638db8f0aa96555a5311fa3eaad))


### Bug Fixes

* **checks:** change the expected node version ([726d66f](https://github.com/twilio-labs/twilio-run/commit/726d66fc2e3a4097725c10c3d7d98285d23dd737))
* **examples:** remove unnecessary console.log ([c7c5b0a](https://github.com/twilio-labs/twilio-run/commit/c7c5b0a14e411adc4818b3001b18e39076e12aa7))
* **server:** avoid overriding env variables ([e2c75cb](https://github.com/twilio-labs/twilio-run/commit/e2c75cb9ec1b4c9e00c703af160d7e9a9379ee89))
* **server:** update request body size ([#102](https://github.com/twilio-labs/twilio-run/issues/102)) ([8689f00](https://github.com/twilio-labs/twilio-run/commit/8689f00d217151d5f7b21c325747c50fb1f60082)), closes [#98](https://github.com/twilio-labs/twilio-run/issues/98)

### [2.1.1](https://github.com/twilio-labs/twilio-run/compare/v2.1.0...v2.1.1) (2019-10-03)


### Bug Fixes

* use fixed windowSize when not available ([#83](https://github.com/twilio-labs/twilio-run/issues/83)) ([5130348](https://github.com/twilio-labs/twilio-run/commit/5130348)), closes [#82](https://github.com/twilio-labs/twilio-run/issues/82)



## [2.1.0](https://github.com/twilio-labs/twilio-run/compare/v2.0.0...v2.1.0) (2019-09-25)


### Bug Fixes

* **activate:** change environment flag from 'required' to 'requiresArg' ([#75](https://github.com/twilio-labs/twilio-run/issues/75)) ([a6367fa](https://github.com/twilio-labs/twilio-run/commit/a6367fa))
* **debug:** fix redaction of logger overwriting values ([#79](https://github.com/twilio-labs/twilio-run/issues/79)) ([c5c6081](https://github.com/twilio-labs/twilio-run/commit/c5c6081)), closes [#78](https://github.com/twilio-labs/twilio-run/issues/78)
* **server:** object Runtime not available before function run ([#80](https://github.com/twilio-labs/twilio-run/issues/80)) ([ce63952](https://github.com/twilio-labs/twilio-run/commit/ce63952))
* **tests:** update paths to support win32 ([#73](https://github.com/twilio-labs/twilio-run/issues/73)) ([f6ea72d](https://github.com/twilio-labs/twilio-run/commit/f6ea72d))


### Features

* add estimated execution time to function run ([#81](https://github.com/twilio-labs/twilio-run/issues/81)) ([cf8b21d](https://github.com/twilio-labs/twilio-run/commit/cf8b21d))
* add link to Twilio Console logs to deploy/activate ([#77](https://github.com/twilio-labs/twilio-run/issues/77)) ([7bd4f7c](https://github.com/twilio-labs/twilio-run/commit/7bd4f7c))
* **deploy,activate:** add flag to deploy/promote to production ([#76](https://github.com/twilio-labs/twilio-run/issues/76)) ([77c95e4](https://github.com/twilio-labs/twilio-run/commit/77c95e4))



## [2.0.0](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-rc.5...v2.0.0) (2019-08-05)


### Bug Fixes

* **runtime:** fix wrong service name in getSync ([#14](https://github.com/twilio-labs/twilio-run/issues/14)) ([bd2e04d](https://github.com/twilio-labs/twilio-run/commit/bd2e04d))


### Features

* **runtime:** support better error formatting ([#67](https://github.com/twilio-labs/twilio-run/issues/67)) ([e36594e](https://github.com/twilio-labs/twilio-run/commit/e36594e)), closes [#64](https://github.com/twilio-labs/twilio-run/issues/64) [#65](https://github.com/twilio-labs/twilio-run/issues/65)



### [1.1.2](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-beta.9...v1.1.2) (2019-07-09)


### Build System

* **npm:** update jest dependency ([30cade1](https://github.com/twilio-labs/twilio-run/commit/30cade1))



### [1.1.1](https://github.com/twilio-labs/twilio-run/compare/v1.1.0...v1.1.1) (2019-06-28)



## [1.1.0](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-beta.7...v1.1.0) (2019-06-28)



## [2.0.0-rc.5](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-rc.4...v2.0.0-rc.5) (2019-07-31)


### Bug Fixes

* **activate:** use logger for info printing ([dd14bd0](https://github.com/twilio-labs/twilio-run/commit/dd14bd0))



## [2.0.0-rc.4](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-rc.3...v2.0.0-rc.4) (2019-07-31)



## [2.0.0-rc.3](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2019-07-30)


### Bug Fixes

* **server:** return better error for invalid function code ([#49](https://github.com/twilio-labs/twilio-run/issues/49)) ([7bc82c2](https://github.com/twilio-labs/twilio-run/commit/7bc82c2))
* **server:** set plain text content-type for string responses ([#52](https://github.com/twilio-labs/twilio-run/issues/52)) ([ca4f541](https://github.com/twilio-labs/twilio-run/commit/ca4f541))
* **start:** fix asset path for protected assets ([84dafcf](https://github.com/twilio-labs/twilio-run/commit/84dafcf))
* **start:** improve margin for text wrapping ([1d221e7](https://github.com/twilio-labs/twilio-run/commit/1d221e7))
* **start:** wrap output for smaller terminals ([#47](https://github.com/twilio-labs/twilio-run/issues/47)) ([e5ae37d](https://github.com/twilio-labs/twilio-run/commit/e5ae37d))
* removes console.error ([#48](https://github.com/twilio-labs/twilio-run/issues/48)) ([e2b374d](https://github.com/twilio-labs/twilio-run/commit/e2b374d))



## [2.0.0-rc.2](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2019-07-26)


### Bug Fixes

* **activate:** print accountSid and token to stderr ([a79ea58](https://github.com/twilio-labs/twilio-run/commit/a79ea58))
* **activate:** redact printed auth token ([709acd3](https://github.com/twilio-labs/twilio-run/commit/709acd3))
* **deploy:** change deploy example to use environment flag ([dbed2a4](https://github.com/twilio-labs/twilio-run/commit/dbed2a4))
* **deploy:** improve deploy output of private assets ([486ae73](https://github.com/twilio-labs/twilio-run/commit/486ae73))
* **list:** print meta info to list command ([#32](https://github.com/twilio-labs/twilio-run/issues/32)) ([585176a](https://github.com/twilio-labs/twilio-run/commit/585176a))
* **templates:** switch template list endpoint to next branch ([5a5030e](https://github.com/twilio-labs/twilio-run/commit/5a5030e))


### Features

* introduce config file functionality ([#15](https://github.com/twilio-labs/twilio-run/issues/15)) ([#38](https://github.com/twilio-labs/twilio-run/issues/38)) ([a86f017](https://github.com/twilio-labs/twilio-run/commit/a86f017)), closes [#27](https://github.com/twilio-labs/twilio-run/issues/27) [#45](https://github.com/twilio-labs/twilio-run/issues/45) [#46](https://github.com/twilio-labs/twilio-run/issues/46) [twilio-labs/serverless-api#8](https://github.com/twilio-labs/twilio-run/issues/8) [#36](https://github.com/twilio-labs/twilio-run/issues/36) [#36](https://github.com/twilio-labs/twilio-run/issues/36) [#27](https://github.com/twilio-labs/twilio-run/issues/27)
* **new:** change from prompts to inquirer ([#36](https://github.com/twilio-labs/twilio-run/issues/36)) ([9745010](https://github.com/twilio-labs/twilio-run/commit/9745010))


### BREAKING CHANGES

* Deprecating --functions-env as an option
* Error page layout changed
* Deprecating --functions-env as an option



## [2.0.0-rc.1](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-rc.0...v2.0.0-rc.1) (2019-07-25)



## [2.0.0-rc.0](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-beta.13...v2.0.0-rc.0) (2019-07-24)


### Bug Fixes

* update code for new version of severless-api ([#46](https://github.com/twilio-labs/twilio-run/issues/46)) ([06e2b71](https://github.com/twilio-labs/twilio-run/commit/06e2b71)), closes [twilio-labs/serverless-api#8](https://github.com/twilio-labs/twilio-run/issues/8)



## [2.0.0-beta.13](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-beta.12...v2.0.0-beta.13) (2019-07-24)


### Bug Fixes

* **logs:** redact info in logs ([724455b](https://github.com/twilio-labs/twilio-run/commit/724455b))


### Features

* **runtime:** handle invalid account sid & new error page ([11a6ab2](https://github.com/twilio-labs/twilio-run/commit/11a6ab2)), closes [#45](https://github.com/twilio-labs/twilio-run/issues/45)


### BREAKING CHANGES

* **runtime:** Error page layout changed



## [2.0.0-beta.12](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-beta.11...v2.0.0-beta.12) (2019-07-20)


### Bug Fixes

* **deploy:** fix conflicting-service error message ([b12ed02](https://github.com/twilio-labs/twilio-run/commit/b12ed02))
* **list:** improve error message ([#41](https://github.com/twilio-labs/twilio-run/issues/41)) ([ad2cf28](https://github.com/twilio-labs/twilio-run/commit/ad2cf28))
* **new:** fix random error when canceling ([#33](https://github.com/twilio-labs/twilio-run/issues/33)) ([f84da5e](https://github.com/twilio-labs/twilio-run/commit/f84da5e))
* **new:** improve experience of new command ([80fbd27](https://github.com/twilio-labs/twilio-run/commit/80fbd27)), closes [#20](https://github.com/twilio-labs/twilio-run/issues/20)
* **runtime:** do not serve private assets ([d49640e](https://github.com/twilio-labs/twilio-run/commit/d49640e))
* **runtime:** fix inconsistencies in local runtime ([93dcfc9](https://github.com/twilio-labs/twilio-run/commit/93dcfc9)), closes [#42](https://github.com/twilio-labs/twilio-run/issues/42) [#43](https://github.com/twilio-labs/twilio-run/issues/43)
* **server:** disable cache in live mode & fix missing function ([47fb82d](https://github.com/twilio-labs/twilio-run/commit/47fb82d)), closes [#35](https://github.com/twilio-labs/twilio-run/issues/35)
* **start:** improve listing of private assets ([e0ebc77](https://github.com/twilio-labs/twilio-run/commit/e0ebc77))


### Features

* **activate:** print deployment URL after activating ([085eb36](https://github.com/twilio-labs/twilio-run/commit/085eb36)), closes [#37](https://github.com/twilio-labs/twilio-run/issues/37)
* **list:** make services the default list type ([e6ba016](https://github.com/twilio-labs/twilio-run/commit/e6ba016)), closes [#44](https://github.com/twilio-labs/twilio-run/issues/44)
* **new:** updates new to download multiple file templates ([#39](https://github.com/twilio-labs/twilio-run/issues/39)) ([a9f3fd2](https://github.com/twilio-labs/twilio-run/commit/a9f3fd2)), closes [#20](https://github.com/twilio-labs/twilio-run/issues/20)
* **start:** turn live flag default to true ([9ff9a04](https://github.com/twilio-labs/twilio-run/commit/9ff9a04))


### BREAKING CHANGES

* **new:** This needs the functions-templates repo to be up to date. Currently it points to
the next branch, which is up to date.
* **list:** Default output of "twilio-run list" changed
* **start:** Caching of functions is now disabled in local dev mode by default
* **runtime:** The response of getFunctions() changed but is now consistent with the cloud
* **runtime:** Previously private assets would be served during local development. With this
change they'll return a 403 Forbidden instead



## [2.0.0-beta.11](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-beta.10...v2.0.0-beta.11) (2019-07-11)


### Bug Fixes

* move Node.js version warning to consistent look ([853956b](https://github.com/twilio-labs/twilio-run/commit/853956b))


### Features

* **types:** ship typescript definitions ([4821a29](https://github.com/twilio-labs/twilio-run/commit/4821a29))



## [2.0.0-beta.10](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-beta.9...v2.0.0-beta.10) (2019-07-11)


### Bug Fixes

* **activate:** rename Functions with Serverless ([36a9254](https://github.com/twilio-labs/twilio-run/commit/36a9254))
* **checks:** change exit codes for checks ([71321e8](https://github.com/twilio-labs/twilio-run/commit/71321e8))
* **new:** fix dep installation regression ([252c79e](https://github.com/twilio-labs/twilio-run/commit/252c79e))
* **start:** update messaging for different Node.js version ([#22](https://github.com/twilio-labs/twilio-run/issues/22)) ([33e822e](https://github.com/twilio-labs/twilio-run/commit/33e822e))


### Features

* improve output and checks for commands ([c84a85d](https://github.com/twilio-labs/twilio-run/commit/c84a85d)), closes [#26](https://github.com/twilio-labs/twilio-run/issues/26)
* **deploy:** improve output for failed deployments ([#24](https://github.com/twilio-labs/twilio-run/issues/24)) ([1102a98](https://github.com/twilio-labs/twilio-run/commit/1102a98))
* **list:** add default value for environment ([#25](https://github.com/twilio-labs/twilio-run/issues/25)) ([11409ad](https://github.com/twilio-labs/twilio-run/commit/11409ad))
* improve Service SID error messages ([#30](https://github.com/twilio-labs/twilio-run/issues/30)) ([0fd1f66](https://github.com/twilio-labs/twilio-run/commit/0fd1f66))
* replace projectName with serviceName ([c5c8ab2](https://github.com/twilio-labs/twilio-run/commit/c5c8ab2)), closes [#17](https://github.com/twilio-labs/twilio-run/issues/17)
* **list:** improve spacing of list command output ([#30](https://github.com/twilio-labs/twilio-run/issues/30)) ([0a88331](https://github.com/twilio-labs/twilio-run/commit/0a88331))
* **start:** add support for cwd flag & relative project paths ([#19](https://github.com/twilio-labs/twilio-run/issues/19)) ([6c45d55](https://github.com/twilio-labs/twilio-run/commit/6c45d55))


### Tests

* fix tests in travis ([b7b0d5c](https://github.com/twilio-labs/twilio-run/commit/b7b0d5c))


### BREAKING CHANGES

* --project-name is now deprecated and --service-name should be used instead
* **list:** Output will differ in list command



## [2.0.0-beta.9](https://github.com/twilio-labs/twilio-run/compare/v2.0.0-beta.8...v2.0.0-beta.9) (2019-07-09)


### Build System

* **npm:** uninstall inquierer ([13965c0](https://github.com/twilio-labs/twilio-run/commit/13965c0))


### Features

* move project to TypeScript ([#23](https://github.com/twilio-labs/twilio-run/issues/23)) ([83b1a05](https://github.com/twilio-labs/twilio-run/commit/83b1a05))


### BREAKING CHANGES

* paths of files have changed which will break direct imports
