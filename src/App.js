import React, { useState } from "react";
import "./css/App.css";

// import Player from "./components/Player";
import TeamsPage from "./components/TeamsPage";
import Home from "./components/Home";

function App() {
  // const [players, setPlayers] = useState([]);
  const [ally, setAlly] = useState("");
  const [ready, setReady] = useState(false);

  return (
    <div>
      {ready ? (
        <TeamsPage ally={ally} />
      ) : (
        <Home ally={ally} setAlly={setAlly} setReady={setReady} ready={ready} />
      )}
    </div>
  );
}

export default App;
