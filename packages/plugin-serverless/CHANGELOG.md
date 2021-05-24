# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.2-rc.0](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.1...@twilio-labs/plugin-serverless@2.0.2-rc.0) (2021-05-24)

**Note:** Version bump only for package @twilio-labs/plugin-serverless





## [2.0.1](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0...@twilio-labs/plugin-serverless@2.0.1) (2021-05-20)

**Note:** Version bump only for package @twilio-labs/plugin-serverless





# [2.0.0](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0-beta.8...@twilio-labs/plugin-serverless@2.0.0) (2021-05-19)

**Note:** Version bump only for package @twilio-labs/plugin-serverless





# [2.0.0-beta.8](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0-beta.7...@twilio-labs/plugin-serverless@2.0.0-beta.8) (2021-05-18)


### Bug Fixes

* **plugin-serverless:** handle direct username/password input ([#268](https://github.com/twilio-labs/serverless-toolkit/issues/268)) ([2c1dc3c](https://github.com/twilio-labs/serverless-toolkit/commit/2c1dc3ca5b6ac69efbb7f68cc6be07f6d0c182e1))





# [2.0.0-beta.7](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0-beta.6...@twilio-labs/plugin-serverless@2.0.0-beta.7) (2021-05-17)


### Bug Fixes

* **plugin-serverless:** add alias support ([#267](https://github.com/twilio-labs/serverless-toolkit/issues/267)) ([de3cdb4](https://github.com/twilio-labs/serverless-toolkit/commit/de3cdb4750641004272fedd38e8cca7e31396109)), closes [#242](https://github.com/twilio-labs/serverless-toolkit/issues/242)





# [2.0.0-beta.6](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0-beta.5...@twilio-labs/plugin-serverless@2.0.0-beta.6) (2021-05-13)

**Note:** Version bump only for package @twilio-labs/plugin-serverless





# [2.0.0-beta.5](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0-beta.4...@twilio-labs/plugin-serverless@2.0.0-beta.5) (2021-05-01)

**Note:** Version bump only for package @twilio-labs/plugin-serverless





# [2.0.0-beta.4](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0-beta.3...@twilio-labs/plugin-serverless@2.0.0-beta.4) (2021-04-30)


### chore

* remove Node.js 10 support ([#253](https://github.com/twilio-labs/serverless-toolkit/issues/253)) ([f6192fa](https://github.com/twilio-labs/serverless-toolkit/commit/f6192fad188a787dfbb7d1ed6a32f5d2baa4570c))


### BREAKING CHANGES

* Installing the new version on Node.js 10 will result in an error





# [2.0.0-beta.3](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0-beta.2...@twilio-labs/plugin-serverless@2.0.0-beta.3) (2021-04-21)

**Note:** Version bump only for package @twilio-labs/plugin-serverless





# [2.0.0-beta.2](https://github.com/twilio-labs/serverless-toolkit/compare/@twilio-labs/plugin-serverless@2.0.0-beta.1...@twilio-labs/plugin-serverless@2.0.0-beta.2) (2021-04-21)

**Note:** Version bump only for package @twilio-labs/plugin-serverless





# 2.0.0-beta.1 (2021-04-21)


### Bug Fixes

* **activate:** rename activate to promote ([a931c3e](https://github.com/twilio-labs/serverless-toolkit/commit/a931c3e64c835da93ec541959d3c35f046e1f269))
* **utils:** enable no prefix for options ([#10](https://github.com/twilio-labs/serverless-toolkit/issues/10)) ([43d5e23](https://github.com/twilio-labs/serverless-toolkit/commit/43d5e23d75850bc60eb2603f1a428aa3cad790bd))
* **utils:** pass hidden attribute along ([#12](https://github.com/twilio-labs/serverless-toolkit/issues/12)) ([c2ef700](https://github.com/twilio-labs/serverless-toolkit/commit/c2ef700232fc2711a3a55c1cfece9b9b1295e184))
* add hidden logCacheSize option ([e8c02dc](https://github.com/twilio-labs/serverless-toolkit/commit/e8c02dc4469dd5dba6f7662750dae2446f6eb894))
* change to the right imports for twilio-run ([84de3b5](https://github.com/twilio-labs/serverless-toolkit/commit/84de3b547d8b4f9a20a7a9ef74eba307b0e746e5))
* imports getRegionAndEdge everywhere it is used ([bb5ddec](https://github.com/twilio-labs/serverless-toolkit/commit/bb5ddecaa02e50153a956887aed70eead9717013))
* pass yargs compatible flags ([6dfcdf0](https://github.com/twilio-labs/serverless-toolkit/commit/6dfcdf0dc8455577ed362c1b8681ce127481e03e)), closes [twilio-labs/twilio-run#16](https://github.com/twilio-labs/twilio-run/issues/16)
* update to create-twilio-function 2.0.0-alpha.4 ([ae739bf](https://github.com/twilio-labs/serverless-toolkit/commit/ae739bf02d895a93852c0e5b9398793f9793436e))
* upgrade oclif and twilio-cli dependencies ([#27](https://github.com/twilio-labs/serverless-toolkit/issues/27)) ([5a2a2de](https://github.com/twilio-labs/serverless-toolkit/commit/5a2a2ded0759098f032dada62a7daf3acd85a318))


### Features

* **init:** imports command from create-twilio-function. ([#9](https://github.com/twilio-labs/serverless-toolkit/issues/9)) ([c71b7c3](https://github.com/twilio-labs/serverless-toolkit/commit/c71b7c3c29658774767644051452b36eacebb871))
* add region/edge support ([ed1c30e](https://github.com/twilio-labs/serverless-toolkit/commit/ed1c30eb8f79e54ca0abcb4802ce181e291ea356))
* pass CLI info to twilio-run for cleaner structure ([14e15b0](https://github.com/twilio-labs/serverless-toolkit/commit/14e15b04e5cbb863a0fbd19b15229c418faf5e72))
* update cli-core dependency and don't shrinkwrap while packing ([#7](https://github.com/twilio-labs/serverless-toolkit/issues/7)) ([64ac566](https://github.com/twilio-labs/serverless-toolkit/commit/64ac5669453f2f60ed9da381d73c1459d792cdcf))
* **twilio-run:** restructure configuration ([#198](https://github.com/twilio-labs/serverless-toolkit/issues/198)) ([f88d490](https://github.com/twilio-labs/serverless-toolkit/commit/f88d49027980ee4c4d7f630918f860a987f13887)), closes [#166](https://github.com/twilio-labs/serverless-toolkit/issues/166)


### BREAKING CHANGES

* **twilio-run:** Drops support for .twilio-functions files and internally restructures activate
files to promote





# 2.0.0-beta.0 (2020-08-27)


### Bug Fixes

* change to the right imports for twilio-run ([84de3b5](https://github.com/twilio-labs/serverless-toolkit/commit/84de3b547d8b4f9a20a7a9ef74eba307b0e746e5))
* **activate:** rename activate to promote ([a931c3e](https://github.com/twilio-labs/serverless-toolkit/commit/a931c3e64c835da93ec541959d3c35f046e1f269))
* **utils:** enable no prefix for options ([#10](https://github.com/twilio-labs/serverless-toolkit/issues/10)) ([43d5e23](https://github.com/twilio-labs/serverless-toolkit/commit/43d5e23d75850bc60eb2603f1a428aa3cad790bd))
* **utils:** pass hidden attribute along ([#12](https://github.com/twilio-labs/serverless-toolkit/issues/12)) ([c2ef700](https://github.com/twilio-labs/serverless-toolkit/commit/c2ef700232fc2711a3a55c1cfece9b9b1295e184))
* imports getRegionAndEdge everywhere it is used ([bb5ddec](https://github.com/twilio-labs/serverless-toolkit/commit/bb5ddecaa02e50153a956887aed70eead9717013))
* pass yargs compatible flags ([6dfcdf0](https://github.com/twilio-labs/serverless-toolkit/commit/6dfcdf0dc8455577ed362c1b8681ce127481e03e)), closes [twilio-labs/twilio-run#16](https://github.com/twilio-labs/twilio-run/issues/16)
* update to create-twilio-function 2.0.0-alpha.4 ([ae739bf](https://github.com/twilio-labs/serverless-toolkit/commit/ae739bf02d895a93852c0e5b9398793f9793436e))
* upgrade oclif and twilio-cli dependencies ([#27](https://github.com/twilio-labs/serverless-toolkit/issues/27)) ([5a2a2de](https://github.com/twilio-labs/serverless-toolkit/commit/5a2a2ded0759098f032dada62a7daf3acd85a318))


### Features

* **init:** imports command from create-twilio-function. ([#9](https://github.com/twilio-labs/serverless-toolkit/issues/9)) ([c71b7c3](https://github.com/twilio-labs/serverless-toolkit/commit/c71b7c3c29658774767644051452b36eacebb871))
* add region/edge support ([ed1c30e](https://github.com/twilio-labs/serverless-toolkit/commit/ed1c30eb8f79e54ca0abcb4802ce181e291ea356))
* pass CLI info to twilio-run for cleaner structure ([14e15b0](https://github.com/twilio-labs/serverless-toolkit/commit/14e15b04e5cbb863a0fbd19b15229c418faf5e72))
* update cli-core dependency and don't shrinkwrap while packing ([#7](https://github.com/twilio-labs/serverless-toolkit/issues/7)) ([64ac566](https://github.com/twilio-labs/serverless-toolkit/commit/64ac5669453f2f60ed9da381d73c1459d792cdcf))





# Changelog

All notable changes to this project will be documented in this file.

<a name="1.8.0"></a>

# 1.8.0 (2020-08-12)

### Bug Fixes

- change to the right imports for twilio-run ([84de3b5](https://github.com/twilio-labs/plugin-serverless/commit/84de3b5))
- **activate:** rename activate to promote ([a931c3e](https://github.com/twilio-labs/plugin-serverless/commit/a931c3e))
- **utils:** enable no prefix for options ([#10](https://github.com/twilio-labs/plugin-serverless/issues/10)) ([43d5e23](https://github.com/twilio-labs/plugin-serverless/commit/43d5e23))
- **utils:** pass hidden attribute along ([#12](https://github.com/twilio-labs/plugin-serverless/issues/12)) ([c2ef700](https://github.com/twilio-labs/plugin-serverless/commit/c2ef700))
- imports getRegionAndEdge everywhere it is used ([bb5ddec](https://github.com/twilio-labs/plugin-serverless/commit/bb5ddec))
- pass yargs compatible flags ([6dfcdf0](https://github.com/twilio-labs/plugin-serverless/commit/6dfcdf0)), closes [twilio-labs/twilio-run#16](https://github.com/twilio-labs/twilio-run/issues/16)
- update to create-twilio-function 2.0.0-alpha.4 ([ae739bf](https://github.com/twilio-labs/plugin-serverless/commit/ae739bf))
- upgrade oclif and twilio-cli dependencies ([#27](https://github.com/twilio-labs/plugin-serverless/issues/27)) ([5a2a2de](https://github.com/twilio-labs/plugin-serverless/commit/5a2a2de))

### Features

- **init:** imports command from create-twilio-function. ([#9](https://github.com/twilio-labs/plugin-serverless/issues/9)) ([c71b7c3](https://github.com/twilio-labs/plugin-serverless/commit/c71b7c3))
- add region/edge support ([ed1c30e](https://github.com/twilio-labs/plugin-serverless/commit/ed1c30e))
- pass CLI info to twilio-run for cleaner structure ([14e15b0](https://github.com/twilio-labs/plugin-serverless/commit/14e15b0))
- update cli-core dependency and don't shrinkwrap while packing ([#7](https://github.com/twilio-labs/plugin-serverless/issues/7)) ([64ac566](https://github.com/twilio-labs/plugin-serverless/commit/64ac566))
