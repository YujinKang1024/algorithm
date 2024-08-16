// Time Limit Exceeded으로 풀이에 실패함. 재풀이 필요
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let biggestProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = prices.length - 1; j > i; j--) {
            if (prices[i] < prices[j]) {
                if (!biggestProfit) {
                    biggestProfit = prices[j] - prices[i];
                } else if (biggestProfit < prices[j] - prices[i]) {
                    biggestProfit = prices[j] - prices[i]
                }
            }
        }
    }

    return biggestProfit;
};
