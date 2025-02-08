/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b) => a - b);

    if (nums.length % 2) {
        return nums[(nums.length - 1)/ 2];
    } else {
        return nums[nums.length / 2];
    }
};