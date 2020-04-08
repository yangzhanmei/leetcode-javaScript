/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
  let answer = [];

  for (let i = 0; i < mat.length; i++) {
    answer.push([]);
    for (let j = 0; j < mat[i].length; j++) {
      if (getAnswerItem(mat, i, j, K)) {
        answer[i].push(getAnswerItem(mat, i, j, K));
      }
    }
  }

  return answer;
};

function getAnswerItem(mat, i, j, k) {
  let result = 0;

  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[i].length; c++) {
      if (i - k <= r && r <= i + k && j - k <= c && c <= j + k) {
        result += mat[r][c];
      }
    }
  }

  return result;
}
