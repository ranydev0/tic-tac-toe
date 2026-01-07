import { useState } from "react";
import Log from "./components/Log";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare({ rowIndex, colIndex }) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main id="game-container">
      <section id="board-container">
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </section>
      <section id="info-container">
        <div id="players-container">
          <ol>
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
        </div>
        <Log />
      </section>
    </main>
  );
}

export default App;
