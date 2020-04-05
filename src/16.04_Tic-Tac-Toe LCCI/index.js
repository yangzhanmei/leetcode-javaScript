/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function(board) {
  const boardList = [];
  const emptyList = [];
  for (let i = 0; i < board.length; i++) {
    let iList = board[i].split('');
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === ' ') {
        emptyList.push(' ');
      }
    }
    boardList.push(iList);
  }
  const xIsWin = isWin(boardList, 'X');
  const oIsWin = isWin(boardList, 'O');
  if (xIsWin) {
    return 'X';
  }
  if (oIsWin) {
    return 'O';
  }
  if (emptyList.length > 0) {
    return 'Pending';
  }

  return 'Draw';
};

function isWin(board, str) {
  let xLine = [];
  for (let i = 0; i < board.length; i++) {
    let x = 1;
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== str) {
        x = 0;
        break;
      }
    }
    xLine.push(x);
  }
  if (xLine.find(item => item === 1) >= 0) {
    return 1;
  }

  let yLine = [];
  for (let i = 0; i < board.length; i++) {
    let y = 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== str) {
        y = 0;
        break;
      }
    }
    yLine.push(y);
  }
  if (yLine.find(item => item === 1) >= 0) {
    return 1;
  }

  let upLine = 1;
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] !== str) {
      upLine = 0;
      break;
    }
  }
  if (upLine) {
    return 1;
  }

  let downLine = 1;
  for (let i = 0; i < board.length; i++) {
    if (board[i][board.length - 1 - i] !== str) {
      downLine = 0;
      break;
    }
  }
  return downLine;
}
