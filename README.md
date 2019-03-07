# crates.io.js [![npm version](https://img.shields.io/npm/v/crates.io.svg?style=flat)](https://www.npmjs.com/package/crates.io) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/crates.io.js)](https://dependabot.com)

A [crates.io](https://crates.io) API client.

## Usage

A complete documentation is available at https://ffflorian.github.io/crates.io.js/.

### Installation

Run `yarn add crates.io` or `npm install crates.io`.

### Example

```ts
import {CratesIO} from 'crates.io';

const cratesIO = new CratesIO('my-api-key');
```

## Build and test

```
yarn
yarn dist
```
