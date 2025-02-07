/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let targetElem = 2; 

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] === nums[targetElem-1] && nums[i] === nums[targetElem-2]) {
            continue;
        } else {
            nums[targetElem] = nums[i];
            targetElem++;
        }
    }

    return targetElem;
};