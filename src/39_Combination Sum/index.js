/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  let pathList = [];
  function getPath(list, target, start) {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      result.push([...list]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      list.push(candidates[i]);
      getPath(list, target - candidates[i], i);
      list.pop();
    }
  }
  getPath(pathList, target, 0);

  return result;
};
