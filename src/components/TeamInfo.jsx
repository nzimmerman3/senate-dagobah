import React from "react";

function TeamInfo({ team, teamName }) {
  const totalPower = team.reduce((prev, unit) => {
    return prev + unit.data.power;
  }, 0);

  return (
    <div>
      <h3>
        {teamName}:{totalPower}
      </h3>
      {team.map((unit) => {
        const id = unit.data.base_id;
        const name = unit.data.name;
        const power = unit.data.power;
        return (
          <p key={id}>
            {name}:{power}
          </p>
        );
      })}
    </div>
  );
}

export default TeamInfo;
