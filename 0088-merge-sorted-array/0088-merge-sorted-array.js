/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (nums1.includes(0)) {
        for(let i = 0; i < nums1.length; i++) {
            if (!nums1[i] && i >= m) {
                nums1.splice(i,nums1.length - m);
                break;
            };
        }
    }
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i]);
    }

    nums1.sort((a, b) => a - b);
};