import React from "react";
import UnitInfo from "./UnitInfo";

function TeamInfo({ team, teamName }) {
  const totalPower = team.reduce((prev, unit) => {
    return prev + unit.data.power;
  }, 0);

  return (
    <div>
      <h3>{teamName}</h3>
      <h4>
        {/* https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */}
        Power: {totalPower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </h4>
      {team.map((unit) => {
        return <UnitInfo unit={unit} />;
      })}
    </div>
  );
}

export default TeamInfo;
