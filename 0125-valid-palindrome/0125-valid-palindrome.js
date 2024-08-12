/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const transformedS = s.toLowerCase().replaceAll(' ', '');
    const spicials = [];
    let removedSpicials = transformedS;

    for (let i = 0; i < transformedS.length; i++) {
        if (transformedS[i].toLowerCase() === transformedS[i].toUpperCase()) {
            if (!spicials.includes(transformedS[i]) && isNaN(transformedS[i])) {
                spicials.push(transformedS[i]);
            }
        }
    }

    if (spicials.length) {
        for (let i = 0; i < spicials.length; i++) {
            removedSpicials = removedSpicials.replaceAll(spicials[i], "");
        }
    }

    const reversed = [...removedSpicials].reverse().join('');

    if (removedSpicials === reversed) {
        return true
    }

    return false;
};