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
      <Row className="unit-info">
        <Col>
          {" "}
          <h5>{name}</h5>
        </Col>
        <Col>
          {" "}
          <p>
            Power:{" "}
            {stats.power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </Col>
        <Col>
          {" "}
          <p>Gear: {gear}</p>
        </Col>
        {gear === 13 ? (
          <Col>
            {" "}
            <p>Relic: {relic}</p>
          </Col>
        ) : (
          <Col></Col>
        )}
        <Col>
          {" "}
          <p>Speed: {stats.speed}</p>
        </Col>
        {/* <Col>
          {" "}
          <p>Health: {stats.health}</p>
        </Col>
        <Col>
          {" "}
          <p>Protection: {stats.protection}</p>
        </Col>
        <Col>
          {" "}
          <p>Physical Damage: {stats.pDamage}</p>
        </Col>
        <Col>
          {" "}
          <p>Special Damage: {stats.sDamage}</p>
        </Col> */}
      </Row>
    </div>
  );
}

export default UnitInfo;
