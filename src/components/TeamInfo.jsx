import React from "react";
import UnitInfo from "./UnitInfo";

function TeamInfo({ team, teamName }) {
  team.sort(function (a, b) {
    return b.data.power - a.data.power;
  });
  const reducedTeam = team.slice(0, 5);
  const totalPower = reducedTeam.reduce((prev, unit) => {
    return prev + unit.data.power;
  }, 0);

  const avgPower = Math.round(totalPower / reducedTeam.length);

  return (
    <div>
      <h3>{teamName}</h3>
      <h4>
        {/* https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */}
        Power: {totalPower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </h4>
      <h4>
        Avg Power: {avgPower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </h4>
      {reducedTeam.map((unit) => {
        return <UnitInfo unit={unit} />;
      })}
    </div>
  );
}

export default TeamInfo;
