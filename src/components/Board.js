import React from "react";
import Square from "./Square";
import { calculateWinner } from "../api/calculatewinner";
import RefreshButton from "./resetbutton.js";

export default function Board() {
  const [state, setState] = React.useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });

  function handleClick(index) {
    if (state.squares[index]) {
      return;
    }
    //sliced() kopiert ein vorhandenes array
    //ansonsten würde es als "pointer" fungieren
    //Immutability: state nur via setState() ändern
    const squaresCopy = state.squares.slice();
    squaresCopy[index] = state.xIsNext ? "X" : "O";
    if (winner) {
    } else {
      setState({ squares: squaresCopy, xIsNext: !state.xIsNext });
    }
  }

  function renderSquare(index) {
    return (
      <Square value={state.squares[index]} onClick={() => handleClick(index)} />
    );
  }
  function resetBoard() {
    setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  }

  function startNewGame() {
    return <RefreshButton onClick={() => resetBoard()} />;
  }

  const winner = calculateWinner(state.squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${state.xIsNext ? "X" : "O"}`;
  }

  // status = `Next player: ${state.xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div>{startNewGame()}</div>
    </div>
  );
}
