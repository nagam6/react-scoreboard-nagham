import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Live Scoreboard</h1>

      <Scoreboard
        redTeamName="Team Red"
        blueTeamName="Team Blue"
      />
    </div>
  );
}

export default App;
