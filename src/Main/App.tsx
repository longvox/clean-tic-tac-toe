import React from "react";
import { OnMemoryDataSourceImpl, RepositoryImpl } from "../Data";
import { TicTacToeView } from "../Presentation";
import "./App.css";

// Dependency injection
const dataSource = new OnMemoryDataSourceImpl();
const repository = new RepositoryImpl(dataSource);

export function App() {
  return <TicTacToeView repository={repository} />;
}
