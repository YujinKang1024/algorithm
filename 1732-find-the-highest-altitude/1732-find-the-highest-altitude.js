/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const altitudes = [0];

    for (let i = 0; i < gain.length; i++) {
        altitudes.push(gain[i] + altitudes[altitudes.length - 1]);
    }

    return Math.max(...altitudes);
};