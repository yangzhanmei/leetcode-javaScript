/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let r = {};
  let pList = [];
  let bList = [];
  let result = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        r.x = j;
        r.y = i;
      } else if (board[i][j] === 'B') {
        bList.push({ x: j, y: i });
      } else if (board[i][j] === 'p') {
        pList.push({ x: j, y: i });
      }
    }
  }
  const bxSameList = bList.filter(bi => bi.x === r.x);
  const bySameList = bList.filter(bi => bi.y === r.y);
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  pList.forEach(item => {
    if (item.x === r.x) {
      if (item.y > r.y) {
        if (
          bxSameList.length < 1 ||
          !bxSameList.find(bi => bi.y > r.y) ||
          bxSameList.find(bi => bi.y > r.y && bi.y - r.y > item.y - r.y)
        ) {
          if (!a) {
            result++;
            a = 1;
          }
        }
      } else if (item.y < r.y) {
        if (
          bxSameList.length < 1 ||
          !bxSameList.find(bi => bi.y < r.y) ||
          bxSameList.find(bi => bi.y < r.y && r.y - bi.y > r.y - item.y)
        ) {
          if (!b) {
            result++;
            b = 1;
          }
        }
      }
    } else if (item.y === r.y) {
      if (item.x > r.x) {
        if (
          bySameList.length < 1 ||
          !bySameList.find(bi => bi.x > r.x) ||
          bySameList.find(bi => bi.x > r.x && bi.x - r.x > item.x - r.x)
        ) {
          if (!c) {
            result++;
            c = 1;
          }
        }
      } else if (item.x < r.x) {
        if (
          bySameList.length < 1 ||
          !bySameList.find(bi => bi.x < r.x) ||
          bySameList.find(bi => bi.x < r.x && r.x - bi.x > r.x - item.x)
        ) {
          if (!d) {
            result++;
            d = 1;
          }
        }
      }
    }
  });
  return result;
};
