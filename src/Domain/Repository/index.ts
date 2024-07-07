import type { Board } from "../Model";

export type Step = {
  board: Board;
  stepNumber: number;
  numOfAllSteps: number;
};

/**
 * Repository managing the history of TicTacToe steps.
 * Each step consists of a board.
 */
export interface Repository {
  getCurrentStep(): Promise<Step>;
  setCurrentStepNumber(stepNumber: number): Promise<void>;
  deleteStepsAfterCurrentStepNumber(): Promise<void>;
  addStep(board: Board): Promise<void>;
}
