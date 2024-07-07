import { Square, Board } from "../Model";

export function isNextTurnX(currentStepNumber: number): boolean {
  return currentStepNumber % 2 === 0;
}

export function calculateWinnerOnBoard(board: Board): Square {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isLineOccupiedWithOneMark(line, board)) {
      return board[line[0]];
    }
  }
  return null;
}

function isLineOccupiedWithOneMark(line: number[], board: Board): boolean {
  const [a, b, c] = line;
  return !!board[a] && board[a] === board[b] && board[a] === board[c];
}
