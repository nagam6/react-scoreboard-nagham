// Displays one team's score and controls
function TeamPanel({ teamName, score, onAdd, onSubtract }) {
  return (
    <div className="team-panel">
      <h2>{teamName}</h2>

      <h1>{score}</h1>

      <button onClick={onAdd}>+1</button>

      <button
        onClick={onSubtract}
        disabled={score === 0}
      >
        -1
      </button>
    </div>
  );
}

export default TeamPanel;