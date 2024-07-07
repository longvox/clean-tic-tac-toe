import { useState, useEffect } from "react";

import type { Step, Repository } from "../../Domain/Repository";
import { clickOnBoard, jumpToStep } from "../../Domain/UseCase";

export function useTicTacToeModelController(repository: Repository) {
  const [currentStep, setCurrentStep] = useState<Step | null>(null);

  useEffect(() => {
    async function init() {
      const initialStep = await repository.getCurrentStep();
      setCurrentStep(initialStep);
    }
    init();
  }, [repository]);

  const handleClickOnBoard = async (indexOnBoard: number) => {
    await clickOnBoard(indexOnBoard, repository);
    const newStep = await repository.getCurrentStep();
    setCurrentStep(newStep);
  };

  const handleJumpToStep = async (stepNumber: number) => {
    await jumpToStep(stepNumber, repository);
    const newStep = await repository.getCurrentStep();
    setCurrentStep(newStep);
  };

  return {
    currentStep,
    handleClickOnBoard,
    handleJumpToStep,
  };
}
