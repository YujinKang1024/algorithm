/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const openinBrackets = ["(", "[", "{"];
    const closingBrackets = [")", "]", "}"];
    const checkedOpeninMatches = [];
    const checkedClosingMatches = [];

    for (let i = 0; i < s.length; i++) {
        let openingIndex = openinBrackets.indexOf(s[i]);
        let closingIndex = closingBrackets.indexOf(s[i]);

        if (openingIndex !== -1) {
            checkedOpeninMatches.push(openingIndex);
        }

        if (closingIndex !== -1 && checkedOpeninMatches.length) {
            if (closingIndex === checkedOpeninMatches[checkedOpeninMatches.length - 1] && !checkedClosingMatches.length) {
                checkedOpeninMatches.pop();
            } else if (closingIndex !== checkedOpeninMatches[checkedOpeninMatches.length - 1] && !checkedClosingMatches.length) {
                return false;
            } else {
                checkedClosingMatches.push(closingIndex);
            }
        } else if (closingIndex !== -1 && !checkedOpeninMatches.length) {
            return false;
        }
    }

    if (checkedOpeninMatches.length || checkedOpeninMatches.length) {
        if (checkedOpeninMatches.length !== checkedClosingMatches.length) {
            return false
        };

        const reversedClosing = checkedClosingMatches.reverse();

        for (let i = 0; i < reversedClosing.length; i++) {
            if (checkedOpeninMatches[i] !== reversedClosing[i]) {
                return false;
            }
        }
    }

    return true;
};