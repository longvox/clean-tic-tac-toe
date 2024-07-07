import type { History, Board } from "../../Domain/Model";
import type { DataSource } from "./DataSource";

export class OnMemoryDataSourceImpl implements DataSource {
  history: History = [];
  stepNumber: number = 0;

  constructor() {
    const board = this.#createEmptyBoard();
    this.history.push({ board });
  }

  #createEmptyBoard(): Board {
    return Array(9).fill(null);
  }

  async setHistory(history: History): Promise<void> {
    this.history = history;
  }

  async getHistory(): Promise<History> {
    return this.history;
  }

  async setStepNumber(stepNumber: number): Promise<void> {
    this.stepNumber = stepNumber;
  }

  async getStepNumber(): Promise<number> {
    return this.stepNumber;
  }
}
