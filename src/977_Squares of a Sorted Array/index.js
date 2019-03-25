/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
    const squares = A.map(item => Math.pow(Math.abs(item), 2));
    const result = squares.sort((a, b) => a - b);

    return result;
};