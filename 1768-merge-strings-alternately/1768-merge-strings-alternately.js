/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    const spreadedWord1 = [...word1];
    const spreadedWord2 = [...word2];
    const mergeWord = [];

    let longestLength;

    if (spreadedWord1.length >= spreadedWord2.length) {
        longestLength = spreadedWord1.length;
    } else {
        longestLength = spreadedWord2.length;
    }

    for (let i = 0; i < longestLength; i++) {
      if (spreadedWord1[i]) mergeWord.push(spreadedWord1[i]);
      if (spreadedWord2[i]) mergeWord.push(spreadedWord2[i]);
    }
    
    return mergeWord.join('');
};