#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const commander = require('commander');

const pkg = require('../package.json');

const main = async () => {
  const program = new commander.Command();
  program.option('-v, --version', 'output the version number');
  program.option('-h, --help', 'output usage information');
  program.option('-i, --input <file>', 'input file');
  program.version(pkg.version);
  program.parse(process.argv);

};

main();

