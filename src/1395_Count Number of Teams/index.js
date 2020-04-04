/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let result = 0;

  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) {
        for (let k = j + 1; k < rating.length; k++) {
          if (rating[k] > rating[j]) {
            result++;
          }
        }
      } else if (rating[j] < rating[i]) {
        for (let k = j + 1; k < rating.length; k++) {
          if (rating[k] < rating[j]) {
            result++;
          }
        }
      }
    }
  }

  return result;
};
