function Log({ turns, players }) {
  return (
    <div id="logs-container">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {players[turn.player]} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </div>
  );
}

export default Log;
