/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let resultList = [];
  let seaList = [];
  let landList = [];
  let result = 1;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        seaList.push({ x: j, y: i });
      } else {
        landList.push({ x: j, y: i });
      }
    }
  }
  if (seaList.length === 0 || landList.length === 0) {
    return -1;
  }

  for (let i = 0; i < seaList.length; i++) {
    let minDistance =
      Math.abs(seaList[i].x - landList[0].x) + Math.abs(seaList[i].y - landList[0].y);
    if (minDistance !== 1) {
      for (let j = 1; j < landList.length; j++) {
        const distance =
          Math.abs(seaList[i].x - landList[j].x) + Math.abs(seaList[i].y - landList[j].y);
        if (distance < minDistance) {
          minDistance = distance;
          if (minDistance === 1) {
            break;
          }
        }
      }
    }
    resultList.push(minDistance);
  }

  for (let i = 0; i < resultList.length; i++) {
    if (resultList[i] > result) {
      result = resultList[i];
    }
  }

  return result;
};
