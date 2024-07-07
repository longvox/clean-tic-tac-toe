import { History } from "../../Domain/Model";

/**
 * DataSource access interface
 * Assuming network access, all methods are asynchronous.
 */
export interface DataSource {
  setHistory(history: History): Promise<void>;
  getHistory(): Promise<History>;

  setStepNumber(stepNumber: number): Promise<void>;
  getStepNumber(): Promise<number>;
}
