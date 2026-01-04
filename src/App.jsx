function App() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return (
    <div id="game-container">
      <section id="board-container">
        <ol id="game-board">
          {initialGameBoard.map((row, rowIndex) =>
            row.map((col, colIndex) => (
              <li key={`${rowIndex}-${colIndex}`}>
                <button className="game-button">{col}</button>
              </li>
            ))
          )}
        </ol>
      </section>
      <section id="info-container">
        <div id="players-container">
          <ol>
            <li className="player active">
              <span className="player-name">
                <span className="text">Player 1</span>
                <span className="player-symbol">X</span>
              </span>
              <button>Edit</button>
            </li>
            <li className="player">
              <span className="player-name">
                <span className="text">Player 2</span>
                <span className="player-symbol">O</span>
              </span>
              <button>Edit</button>
            </li>
          </ol>
        </div>
        <div id="logs-container"></div>
      </section>
    </div>
  );
}

export default App;
