/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let sets = [...new Set(nums)];
  let result = [[]];
  for (let i = 0; i < sets.length; i++) {
    let resultItem = result.map(item => [...item, sets[i]]);

    result = result.concat(resultItem);
  }

  return result;
};
