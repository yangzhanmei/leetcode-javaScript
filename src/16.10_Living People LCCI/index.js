/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function(birth, death) {
  let birthDeathList = [];

  for (let i = 0; i < birth.length; i++) {
    birthDeathList.push({ birth: birth[i], death: death[i] });
  }
  birthDeathList.sort((a, b) => a.birth - b.birth); // 排序

  let nums = {};
  for (let i = birthDeathList.length - 1; i >= 0; i--) {
    if (nums[birthDeathList[i].birth]) {
      continue;
    }
    nums[birthDeathList[i].birth] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (birthDeathList[j].death >= birthDeathList[i].birth) {
        nums[birthDeathList[i].birth] += 1;
      }
    }
  }

  let max = 0;
  Object.keys(nums).forEach(item => {
    if (nums[item] > max) {
      max = nums[item];
    }
  });
  const list = Object.keys(nums).filter(item => {
    // 活着的人数最多的年份list
    if (nums[item] === max) {
      return item;
    }
  });

  let result = list[0];
  list.forEach(item => {
    // 取最小年份
    if (item < result) {
      result = item;
    }
  });

  return result;
};
