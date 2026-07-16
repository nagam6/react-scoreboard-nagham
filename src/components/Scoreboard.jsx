import { useState } from "react";
import TeamPanel from "./TeamPanel";

// Holds both teams' scores, custom step, history, and winner state
function Scoreboard({ redTeamName, blueTeamName }) {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  function addHistory(action) {
    setHistory((currentHistory) => {
      const updatedHistory = [action, ...currentHistory];

      return updatedHistory.slice(0, 5);
    });
  }
  
  function changeRedScore(amount) {
    if (amount < 0 && redScore === 0) return;

    setRedScore((currentScore) =>
      Math.max(0, currentScore + amount)
    );

    addHistory(
      amount > 0
        ? `${redTeamName} +${step}`
        : `${redTeamName} -${step}`
    );
  }

  function changeBlueScore(amount) {
    if (amount < 0 && blueScore === 0) return;

    setBlueScore((currentScore) =>
      Math.max(0, currentScore + amount)
    );

    addHistory(
      amount > 0
        ? `${blueTeamName} +${step}`
        : `${blueTeamName} -${step}`
    );
  }

  function resetScores() {
    setRedScore(0);
    setBlueScore(0);
    setHistory([]);
  }

  return (
    <section className="scoreboard">
      <div className="step-control">
        <label htmlFor="step">Points per click:</label>

        <input
          id="step"
          type="number"
          min="1"
          value={step}
          onChange={(event) =>
            setStep(Math.max(1, Number(event.target.value)))
          }
        />
      </div>

      <div className="team-panels">
        <TeamPanel
          teamName={redTeamName}
          score={redScore}
          step={step}
          onAdd={() => changeRedScore(step)}
          onSubtract={() => changeRedScore(-step)}
        />

        <TeamPanel
          teamName={blueTeamName}
          score={blueScore}
          step={step}
          onAdd={() => changeBlueScore(step)}
          onSubtract={() => changeBlueScore(-step)}
        />
      </div>

      <button className="reset-button" onClick={resetScores}>
        Reset Scores
      </button>

      <div className="history">
        <h2>Last Actions</h2>

        {history.length === 0 ? (
          <p>No actions yet.</p>
        ) : (
          <ul>
            {history.map((action, index) => (
              <li key={`${action}-${index}`}>{action}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Scoreboard;