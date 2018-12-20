import { isArray } from './utils';

export function min(...nums) {
  if (!isArray(nums[0])) {
    return Math.min(...nums);
  }
  return Math.min(...nums[0]);
}

export function copy() {

}
