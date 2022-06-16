#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'display help for command')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>');

program.parse();
