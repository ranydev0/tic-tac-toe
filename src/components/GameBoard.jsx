import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      let updatedBoard = [
        ...prevGameBoard.map((innerArrays) => [...innerArrays]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <li key={`${rowIndex}-${colIndex}`}>
            <button
              className="game-button"
              onClick={() => handleSelectSquare(rowIndex, colIndex)}
            >
              {col}
            </button>
          </li>
        ))
      )}
    </ol>
  );
}

export default GameBoard;
