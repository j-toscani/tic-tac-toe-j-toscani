import React from "react";
import Square from "./Square";

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
    setState({ squares: squaresCopy, xIsNext: !state.xIsNext });
  }

  function renderSquare(index) {
    return (
      <Square value={state.squares[index]} onClick={() => handleClick(index)} />
    );
  }

  const status = `Next player: ${state.xIsNext ? "X" : "O"}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </div>
  );
}
