/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function (A) {
    const result = A.map(item => {
        return item.reverse().map(i => i ^ 1);
    });

    return result;
};