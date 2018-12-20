import { isArray } from './utils';

export function min(nums) {
  if (!isArray(nums)) {
    return nums;
  }
  return Math.min(...nums);
}

export function copy() {

}
