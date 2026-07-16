import { useState } from "react";
import TeamPanel from "./TeamPanel";

// Holds both teams' scores and updates them
function Scoreboard({ redTeamName, blueTeamName }) {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);

  function resetScores() {
    setRedScore(() => 0);
    setBlueScore(() => 0);
  }

  return (
    <section className="scoreboard">
      <div className="team-panels">
        <TeamPanel
          teamName={redTeamName}
          score={redScore}
          onAdd={() => setRedScore((currentScore) => currentScore + 1)}
          onSubtract={() =>
            setRedScore((currentScore) => Math.max(0, currentScore - 1))
          }
        />

        <TeamPanel
          teamName={blueTeamName}
          score={blueScore}
          onAdd={() => setBlueScore((currentScore) => currentScore + 1)}
          onSubtract={() =>
            setBlueScore((currentScore) => Math.max(0, currentScore - 1))
          }
        />
      </div>

      <button className="reset-button" onClick={resetScores}>
        Reset Scores
      </button>
    </section>
  );
}

export default Scoreboard;