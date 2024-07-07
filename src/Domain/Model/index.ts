export type Square = null | "X" | "O";

export type Board = Square[];

type HistoryStep = {
  board: Board;
};

export type History = HistoryStep[];
