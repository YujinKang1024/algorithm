/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const stringX = String(x);
    const reversed = [...stringX].reverse().join("");

    return stringX === reversed;
};