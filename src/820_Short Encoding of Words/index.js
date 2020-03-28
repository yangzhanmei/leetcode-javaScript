/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  let sList = Array.from(new Set(words));
  let S = [...sList];

  for (let i = 0; i < sList.length; i++) {
    const currentValue = sList[i];
    for (let j = 1; j < currentValue.length; j++) {
      const temp = currentValue.slice(j);
      if (words.find(item => item === temp)) {
        S = S.filter(item => item !== temp);
      }
    }
  }

  return S.join('#').length + 1;
};
