import { type Square } from "../Domain/Model";

type StatusViewProps = {
  winner: Square;
  xIsNext: boolean;
};

export function StatusView({ winner, xIsNext }: StatusViewProps) {
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return <div>{status}</div>;
}
