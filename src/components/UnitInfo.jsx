import React from "react";

function UnitInfo({ unit }) {
  const id = unit.data.base_id;
  const name = unit.data.name;
  const power = unit.data.power;
  const speed = unit.data.stats[5];
  return (
    <div>
      <h5>{name}</h5>
      <p>Power: {power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p>Speed: {speed}</p>
    </div>
  );
}

export default UnitInfo;
