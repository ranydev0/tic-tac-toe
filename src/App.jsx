import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main id="game-container">
      <section id="board-container">
        <GameBoard />
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
