/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [[1], [1, 1]];
  let row = 1;

  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  }
  while (numRows > 2 && row + 1 < numRows) {
    let currentArr = [1, 1];
    let currentRow = result[row];
    let currentArrCenter = [];

    for (let i = 0; i < currentRow.length - 1; i++) {
      currentArrCenter.push(currentRow[i] + currentRow[i + 1]);
    }
    currentArr.splice(1, 0, ...currentArrCenter);
    result.push(currentArr);
    row++;
  }

  return result;
};

console.log(generate(1));
