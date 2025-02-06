/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const uniqueNums = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (uniqueNums.includes(nums[i])) {
            nums.splice(i, 1);
            i--;
        } else {
            uniqueNums.push(nums[i]);
        }
    }

    return uniqueNums.length;
    
};