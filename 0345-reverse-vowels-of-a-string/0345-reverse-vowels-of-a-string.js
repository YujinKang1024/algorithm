/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const spreadS = [...s];
    const includedVowels = spreadS.filter((elem, index, arr) => {
        return ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(elem);
    });

    let reversedOrder = includedVowels.length - 1;

    for (let i = 0; i < spreadS.length; i++) {
        if (includedVowels.includes(spreadS[i])) {
            spreadS[i] = includedVowels[reversedOrder];
            reversedOrder--;
        }
    }

    return spreadS.join("");
};