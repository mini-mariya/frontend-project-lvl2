import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');
const tests = [
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'expected.txt', format: 'stylish',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'expected.txt', format: 'stylish',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'expected-plain.txt', format: 'plain',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'expected-plain.txt', format: 'plain',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'expected-outFormat.txt', format: 'json',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'expected-outFormat.txt', format: 'json',
  },
];

test.each(tests)('gendiff tests', ({
  filename1, filename2, output, format,
}) => {
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);
  const expected = readFile(output);
  const result = genDiff(filepath1, filepath2, format);
  expect(result).toEqual(expected);
});

