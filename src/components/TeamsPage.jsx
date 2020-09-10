import React, { useState, useEffect } from "react";
// import data from "../player-data.json";
import axios from "../axios";
import request from "../request";
import TeamInfo from "./TeamInfo";
import teams from "../teams";

function TeamsPage({ ally }) {
  const [units, setUnits] = useState([]);

  // const save = (jsonData) => {
  //   const fileData = JSON.stringify(jsonData);
  //   const blob = new Blob([fileData], { type: "text/plain" });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.download = "filename.json";
  //   link.href = url;
  //   link.click();
  // };

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(request.fetchPlayer(ally));
      // save(response);
      // const response = data;
      // console.log(response);
      setUnits(response.data.units);
    }
    fetch();
  }, [ally]);

  const matchingUnitsArray = teams
    .map((team) => {
      const matchingUnits = units
        //Get matching team
        .filter((unit) => team.includes(unit.data.base_id))
        //Sort each team by power
        .sort(function (a, b) {
          return b.data.power - a.data.power;
        });
      // .push(team[0]);
      // teamNames.push(team[0]);
      return { team: matchingUnits, name: team[0] };
    })
    //Sort teams by power of best character
    .sort(function (a, b) {
      if (a.team.length > 0 && b.team.length > 0) {
        return b.team[0].data.power - a.team[0].data.power;
      } else {
        return true;
      }
    });

  return (
    <div className="teams-display">
      {matchingUnitsArray.map(({ team, name }) => {
        return team.length > 0 ? (
          <TeamInfo key={name} team={team} teamName={name} />
        ) : (
          <div></div>
        );
      })}
    </div>
  );
}

export default TeamsPage;
