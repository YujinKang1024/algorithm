/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const copied = [...candies];
    const answer = [];

    for (let i = 0; i < copied.length; i ++) {
        let currentValue = copied[i] + extraCandies;
        if (Math.max(...copied, currentValue) === currentValue) {
            answer.push(true);
        } else {
            answer.push(false);
        }
    }

    return answer;
};