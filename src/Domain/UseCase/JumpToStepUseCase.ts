import type { Repository } from "../Repository";

export async function jumpToStep(
  stepNumber: number,
  repository: Repository
): Promise<void> {
  return repository.setCurrentStepNumber(stepNumber);
}
