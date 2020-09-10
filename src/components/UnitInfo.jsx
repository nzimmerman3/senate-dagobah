import React from "react";
import { Row, Col } from "react-bootstrap";

function UnitInfo({ unit }) {
  const name = unit.data.name;
  const power = unit.data.power;
  const speed = unit.data.stats[5];
  return (
    <div>
      <Row className="unit-info">
        <Col>
          {" "}
          <h5>{name}</h5>
        </Col>
        <Col>
          {" "}
          <p>Power: {power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </Col>
        <Col>
          {" "}
          <p>Speed: {speed}</p>
        </Col>
      </Row>
    </div>
  );
}

export default UnitInfo;
