import React, { useState, useEffect } from "react";
import data from "../player-data.json";
import axios from "../axios";
import request from "../request";
import TeamInfo from "./TeamInfo";
import teams from "../teams";

function Teams({ ally }) {
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
      const response = await axios.get(request.fetchPlayer(ally));
      // save(response);
      // const response = data;
      console.log(response);
      setUnits(response.data.units);
    }
    fetch();
  }, []);
  return (
    <div className="teams-display">
      {teams.map((team) => {
        const matchingUnits = units.filter((unit) =>
          team.includes(unit.data.base_id)
        );
        return <TeamInfo team={matchingUnits} teamName={team[0]} />;
      })}
      ;
    </div>
  );
}

export default Teams;
