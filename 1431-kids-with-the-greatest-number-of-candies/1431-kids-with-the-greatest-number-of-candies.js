/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const answer = [];

    for (let i = 0; i < candies.length; i ++) {
        let currentValue = candies[i] + extraCandies;
        if (Math.max(...candies, currentValue) === currentValue) {
            answer.push(true);
        } else {
            answer.push(false);
        }
    }

    return answer;
};