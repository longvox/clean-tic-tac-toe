import { calculateWinnerOnBoard, isNextTurnX } from "../Domain/UseCase";
import type { Repository } from "../Domain/Repository";

import { BoardView } from "./BoardView";
import { StatusView } from "./StatusView";
import { JumpToStepButtons } from "./JumpToStepButtons";
import { useTicTacToeModelController } from "./hook/useTicTacToeModelController";

type TicTacToeViewProps = {
  repository: Repository;
};

export function TicTacToeView({ repository }: TicTacToeViewProps) {
  const { currentStep, handleClickOnBoard, handleJumpToStep } =
    useTicTacToeModelController(repository);

  if (!currentStep) {
    return null;
  }

  const winner = calculateWinnerOnBoard(currentStep.board);
  const xIsNext = isNextTurnX(currentStep.stepNumber);
  return (
    <div className="game">
      <div className="game-board">
        <BoardView board={currentStep.board} onClick={handleClickOnBoard} />
      </div>
      <div className="game-info">
        <StatusView winner={winner} xIsNext={xIsNext} />
        <JumpToStepButtons
          numOfAllSteps={currentStep.numOfAllSteps}
          onClick={handleJumpToStep}
        />
      </div>
    </div>
  );
}
