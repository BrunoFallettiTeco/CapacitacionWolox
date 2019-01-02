import isArray from './utils';

export function min(...nums) {
  if (!nums.length) return undefined;
  if (!isArray(nums[0])) {
    return Math.min(...nums);
  }
  return Math.min(...nums[0]);
}

export function copy(object) {
  if (!isArray(object)) {
    return { ...object };
  }
  return [...object];
}

export function reverseMerge(...arrays) {
  const result = [];
  for (let i = 0; i < arrays.length; i += 1) {
    result.unshift(...arrays[i]);
  }
  return result;
}

export function filterAttribs(object) {
  var a,b,rest;
  ({ a, b, ...rest } = copy(object));
  return rest;
}
