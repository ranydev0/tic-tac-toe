function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) =>
        row.map((playerSymbol, colIndex) => (
          <li key={`${rowIndex}-${colIndex}`}>
            <button
              className="game-button"
              onClick={() => onSelectSquare({ rowIndex, colIndex })}
              disabled={playerSymbol ? true : false}
            >
              {playerSymbol}
            </button>
          </li>
        ))
      )}
    </ol>
  );
}

export default GameBoard;
