/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const obj = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    9: 'IX',
    50: 'L',
    40: 'XL',
    10: 'X',
    5: 'V',
    4: 'IV',
    1: 'I',
  };
  const objList = Object.keys(obj).reverse();
  let newNum = num;
  let result = '';
  for (let i = 0; i < objList.length; ) {
    if (newNum === 0) {
      break;
    }
    if (newNum >= objList[i]) {
      newNum -= objList[i];
      result += obj[objList[i]];
    } else {
      i++;
    }
  }

  return result;
};
