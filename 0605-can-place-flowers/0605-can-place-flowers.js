/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length === 1 && n === 1) {
        return flowerbed[0] === 0;
    }

    let count = n;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
                flowerbed[i] = 1;
                count--;
            }

            if (i === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                count--;
            }

            if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
                flowerbed[i] = 1;
                count--;
            }
        }
    }

    return count <= 0;
};