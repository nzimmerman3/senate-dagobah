import React, { useEffect, useState } from "react";
import "./css/App.css";
import axios from "./axios";
import request from "./request";
import Player from "./components/Player";
import teams from "./teams";

import TeamInfo from "./components/TeamInfo";

import data from "./player-data.json";

function App() {
  const [players, setPlayers] = useState([]);
  const [units, setUnits] = useState([]);

  const save = (jsonData) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "filename.json";
    link.href = url;
    link.click();
  };

  useEffect(() => {
    async function fetch() {
      // const response = await axios.get(request.fetchPlayer("146523987"));
      // save(response);
      const response = data;
      console.log(response);
      setUnits(response.data.units);
    }
    fetch();
    // process();
  }, []);

  // process = () => {
  //   return (
  //     <div>
  //       {units
  //         .filter((unit) => padmeGang.includes(unit.data.base_id))
  //         .map((unit) => {
  //           const id = unit.data.base_id;
  //           return (
  //             <p key={id}>
  //               {id} <br /> {unit.data.power}
  //             </p>
  //           );
  //         })}
  //     </div>
  //   );
  // };

  // return (
  //   <div className="App">
  //     {/* {units.map((unit) => {
  //       const id = unit.data.base_id;
  //       return <p key={id}>{id}</p>;
  //     })} */}
  //     {process()}
  //   </div>
  // );

  return teams.map((team) => {
    const matchingUnits = units.filter((unit) =>
      team.includes(unit.data.base_id)
    );
    return <TeamInfo team={matchingUnits} teamName={team[0]} />;
  });
}

export default App;
