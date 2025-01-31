/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const longWordLength = word1.length > word2.length ? word1.length : word2.length;
    const result = [];

    for (i = 0; i < longWordLength; i++) {
        if (word1[i]) result.push(word1[i]);
        if (word2[i]) result.push(word2[i]);
    }

    return result.join('');
};