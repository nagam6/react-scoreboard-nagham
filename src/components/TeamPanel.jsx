// Displays one team's score and controls
function TeamPanel({
  teamName,
  score,
  step,
  onAdd,
  onSubtract,
}) {
  const isWinner = score >= 10;

  return (
    <div className={`team-panel ${isWinner ? "winner" : ""}`}>
      <h2>
        {teamName} {isWinner && "🎉"}
      </h2>

      <h1>{score}</h1>

      <button onClick={onAdd}>+{step}</button>

      <button
        onClick={onSubtract}
        disabled={score === 0}
      >
        -{step}
      </button>
    </div>
  );
}

export default TeamPanel;