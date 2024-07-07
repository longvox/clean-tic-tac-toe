type JumpToStepButtonsProps = {
  numOfAllSteps: number;
  onClick: (stepNumber: number) => void;
};

export function JumpToStepButtons({
  numOfAllSteps,
  onClick,
}: JumpToStepButtonsProps) {
  const buttons = [];
  for (let i = 0; i < numOfAllSteps; i++) {
    const desc = i ? "Go to step #" + i : "Go to game start";
    buttons.push(
      <li key={i}>
        <button onClick={() => onClick(i)}>{desc}</button>
      </li>
    );
  }

  return <ol> {buttons} </ol>;
}
