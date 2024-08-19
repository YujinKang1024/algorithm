/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (!uniqueNums.length || !uniqueNums.includes(nums[i])) {
            uniqueNums.push(nums[i]);
        } else {
            return true;
        }
    }

    return false;
};