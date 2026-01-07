const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <li key={`${rowIndex}-${colIndex}`}>
            <button
              className="game-button"
              onClick={() => onSelectSquare({ rowIndex, colIndex })}
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
