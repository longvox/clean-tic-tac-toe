import { type Square } from "../Domain/Model";

type SquareViewProps = {
  value: Square;
  onClick: () => void;
};

export function SquareView({ value, onClick }: SquareViewProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
