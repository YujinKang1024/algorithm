/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++){
      if (j > i && nums[i] + nums[j] === target) {
        answer.push(i, j);
      }
    }
  }

  return answer;
};