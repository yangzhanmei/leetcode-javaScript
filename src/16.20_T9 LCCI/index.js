/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var getValidT9Words = function(num, words) {
  let result = [];
  const numList = num.split('');
  words.forEach(item => {
    const itemArr = item.split('');
    let flag = 0;
    for (let i = 0; i < itemArr.length; i++) {
      let numItem = parseInt((item.charCodeAt(i) - 97) / 3) + 2;
      if (itemArr[i] === 's' || itemArr[i] === 'v' || itemArr[i] === 'y' || itemArr[i] === 'z') {
        numItem = numItem - 1;
      }
      if (numItem.toString() !== numList[i]) {
        flag = 1;
        break;
      }
    }
    if (!flag) {
      result.push(item);
    }
  });

  return result;
};
