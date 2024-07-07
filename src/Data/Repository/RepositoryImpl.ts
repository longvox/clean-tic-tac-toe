import type { Board } from "../../Domain/Model";
import type { Repository, Step } from "../../Domain/Repository";
import type { DataSource } from "../DataSource";

export class RepositoryImpl implements Repository {
  dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async getCurrentStep(): Promise<Step> {
    const [history, stepNumber] = await Promise.all([
      this.dataSource.getHistory(),
      this.dataSource.getStepNumber(),
    ]);
    const board = history[stepNumber].board;
    const numOfAllSteps = history.length;

    return { board, stepNumber, numOfAllSteps };
  }

  async setCurrentStepNumber(stepNumber: number): Promise<void> {
    const history = await this.dataSource.getHistory();
    if (stepNumber < history.length) {
      await this.dataSource.setStepNumber(stepNumber);
    } else {
      throw Error(
        `Step number ${stepNumber} should be smaller than the history size (${history.length})`
      );
    }
  }

  async deleteStepsAfterCurrentStepNumber(): Promise<void> {
    const [history, stepNumber] = await Promise.all([
      this.dataSource.getHistory(),
      this.dataSource.getStepNumber(),
    ]);
    const trimmedHistory = history.slice(0, stepNumber + 1);
    await this.dataSource.setHistory(trimmedHistory);
  }

  async addStep(board: Board): Promise<void> {
    const history = await this.dataSource.getHistory();
    history.push({ board });
    await this.dataSource.setHistory(history);
  }
}
