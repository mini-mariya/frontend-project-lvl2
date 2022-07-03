import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import formatOutput from './formatters/index.js';

const getFormat = (filename) => path.extname(filename).slice(1);

const getFixturePath = (filename) => path.resolve(process.cwd(), filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const genDiff = (filepath1, filepath2, format = 'stylish') => {

  const data1 = parse(readFile(filepath1), getFormat(filepath1));
  const data2 = parse(readFile(filepath2), getFormat(filepath2));

  const internalTree = buildTree(data1, data2);
  const formattedDiff = formatOutput(internalTree, format);

  return formattedDiff;
};

export default genDiff;
