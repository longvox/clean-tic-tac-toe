import type { Board } from "../Model";
import type { Repository } from "../Repository";
import { isNextTurnX, calculateWinnerOnBoard } from "./Util";

export async function clickOnBoard(
  indexOnBoard: number,
  repository: Repository
) {
  const { board, stepNumber } = await repository.getCurrentStep();
  if (canMarkOnBoard()) {
    await markOnBoard();
  }
  return;

  function canMarkOnBoard(): boolean {
    return hasNobodyWonOnBoard() && isSquareOnBoardFree();
  }

  function hasNobodyWonOnBoard(): boolean {
    const winner = calculateWinnerOnBoard(board);
    return !winner;
  }

  function isSquareOnBoardFree(): boolean {
    return board[indexOnBoard] === null;
  }

  async function markOnBoard() {
    const newBoard = copyBoard();
    newBoard[indexOnBoard] = isNextTurnX(stepNumber) ? "X" : "O";
    await deleteInvalidFutureSteps();
    await repository.addStep(newBoard);
    await repository.setCurrentStepNumber(stepNumber + 1);
  }

  function copyBoard(): Board {
    return [...board];
  }

  function deleteInvalidFutureSteps(): Promise<void> {
    return repository.deleteStepsAfterCurrentStepNumber();
  }
}
