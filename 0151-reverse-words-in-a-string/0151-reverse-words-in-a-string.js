/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reversed = s.split(" ").reverse();

    if (reversed.includes("")) {
        for (let i = 0; i < reversed.length; i++) {
            if (reversed[i] === "") {
                reversed.splice(i, 1);
                i--;
            }
        }
    }
    
    return reversed.join(" ");
};