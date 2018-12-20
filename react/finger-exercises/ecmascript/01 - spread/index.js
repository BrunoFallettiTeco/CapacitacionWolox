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
  } else {
    return [ ...object ];
  }
}
