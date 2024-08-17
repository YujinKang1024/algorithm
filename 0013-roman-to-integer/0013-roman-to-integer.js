/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanNum = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let int = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanNum[s[i]];
        const next = romanNum[s[i + 1]];

        if (current < next) {
            int += next - current;
            i++;
        } else {
            int += current;
        }
    }

    return int;
};