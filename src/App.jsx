import Player from "./components/Player";

function App() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return (
    <main id="game-container">
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
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
        </div>
        <div id="logs-container"></div>
      </section>
    </main>
  );
}

export default App;
