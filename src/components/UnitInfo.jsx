import React from "react";
import { Row, Col } from "react-bootstrap";

function UnitInfo({ unit }) {
  const rawStats = unit.data.stats;

  console.log(unit.data);

  const name = unit.data.name;
  const gear = unit.data.gear_level;
  const relic = unit.data.relic_tier - 2;
  const stars = unit.data.rarity;
  const zetas = [];

  const stats = {
    power: unit.data.power,
    health: rawStats[1],
    protection: rawStats[28],
    speed: rawStats[5],
    pDamage: rawStats[6],
    sDamage: rawStats[7],
    armor: rawStats[8],
    resistance: rawStats[9],
    critDamage: rawStats[16] * 100,
    critChance: rawStats[14] * 100,
    potency: rawStats[17] * 100,
    tenacity: rawStats[18] * 100,
  };

  return (
    <div>
      <div className="row unit-info">
        <div className="col-lg col-sm-12 unit-name">
          {" "}
          <p>{name}</p>
        </div>
        <div className="col-lg col-sm-6">
          {" "}
          <p>
            Power:{" "}
            {stats.power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
        <div className="col-lg col-sm-6">
          {" "}
          <p>Gear: {gear}</p>
        </div>
        {gear === 13 ? (
          <div className="col-lg col-sm-6">
            {" "}
            <p>Relic: {relic}</p>
          </div>
        ) : (
          <div className="col-lg col-sm-6"></div>
        )}
        <div className="col-lg col-sm-6">
          {" "}
          <p>Speed: {stats.speed}</p>
        </div>
      </div>
    </div>
  );
}

export default UnitInfo;
