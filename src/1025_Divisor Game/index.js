/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  if (N === 1) {
    return false;
  }
  if (N === 2) {
    return true;
  }
  let num = N;
  let list = ['', false, true];
  for (let i = 3; i <= N; i++) {
    list[i] = false;
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && !list[i - j]) {
        list[i] = true;
        num -= i;
      }
    }
  }

  return list[N];
};
