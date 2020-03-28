/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length === 0 || deck.length === 1) {
    return false;
  }
  if (deck.length === 2 && deck[0] === deck[1]) {
    return true;
  }
  let obj = {};
  deck.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  });
  const arr = Object.keys(obj);
  if (arr.length === 1) {
    return true;
  }
  let gcdValue = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    gcdValue = gcd(gcdValue || obj[arr[i]], obj[arr[i + 1]]);
  }
  if (gcdValue >= 2) {
    return true;
  } else {
    return false;
  }
};
function gcd(num1, num2) {
  return num2 === 0 ? num1 : gcd(num2, num1 % num2);
}
