# node-fetch-commonjs

[node-fetch](https://github.com/node-fetch/node-fetch) but in a single-file CommonJS format.

## Differences

1. You can `require("node-fetch-commonjs")` directly.
2. You will not see the `ExperimentalWarning: stream/web is an experimental feature` warning.

## Build

```bash
yarn
./build.js # Output to `lib` folder
```

## Install

```bash
yarn add node-fetch-commonjs
```
