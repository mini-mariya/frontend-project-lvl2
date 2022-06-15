#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .helpOption('-h, --help', 'display help for command')

program.parse();