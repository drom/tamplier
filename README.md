[![npm version](https://img.shields.io/npm/v/tamplier.svg)](https://www.npmjs.com/package/tamplier)

Collection JS generators of C functions for:
* json5 consumption
* data hydration
* json schema validation
* templates

## Installation

```bash
npm i -g tamplier
```

## Usage as a CLI tool

```bash
tamplier -i input.js -o output.c
```

## Usage as a library

```js
const tamplier = require('tamplier');

const t = tamplier();

// define arguments
t.amplitude = {type: 'number'};
t.frequency = {type: 'number'};
t.points = {type: 'number'};

t.table1 = t`
time v(in) v(out)
${ t.range(t.points).map(i => t`${i} ${t.amplitude * t.std.sin(i * t.PI / 2)}`) }
`;

console.log(t.table1);
```

## License

MIT
