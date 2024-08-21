/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];

    for (let i = 0; i < nums.length; i++) {
        let fistIndex = nums.indexOf(nums[i]);
        let lastIndex = nums.lastIndexOf(nums[i]);

        if (fistIndex === lastIndex) return nums[i];
    }
};