import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJson from './json.js';

export default (data, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return makeStylish(data);
    case 'plain':
      return makePlain(data);
    case 'json':
      return makeJson(data);
    default:
      throw new Error(`Invalid file format type: '${format}'!`);
  }
};
