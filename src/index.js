import _ from 'lodash';

const genDiff = (data1, data2) => {
  let result = {};

  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  result = keys.map((key) => {
    if (!_.has(data1, key)) {
      return {
        name: key,
        value: data2[key],
        type: 'added',
      };
    }
    if (!_.has(data2, key)) {
      return {
        name: key,
        value: data1[key],
        type: 'deleted',
      };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {
        name: key,
        type: 'nested',
        children: genDiff(data1[key], data2[key]),
      };
    }
    if (data1[key] !== data2[key]) {
      return {
        name: key,
        value1: data1[key],
        value2: data2[key],
        type: 'changed',
      };
    }
    return {
      name: key,
      value: data1[key],
      type: 'unchanged',
    };
  });
  return result;
};

export default genDiff;
