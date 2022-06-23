import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

test('compare json', () => {
  const expectedJson = readFile('expected-json.txt');
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(expectedJson);
});

test('compare yml', () => {
  const expectedYml = readFile('expected-yml.txt');
  expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yaml')).toBe(expectedYml);
});
