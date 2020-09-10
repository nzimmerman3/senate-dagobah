import React from "react";
import UnitInfo from "./UnitInfo";
import { Accordion, Card, Button, Row, Col } from "react-bootstrap";

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
    <div className="team">
      <Accordion className="team-display">
        <Card style={{}}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
            >
              <Row>
                <Col>
                  {reducedTeam.length >= 1 ? (
                    <img
                      src={
                        "https://swgoh.gg/game-asset/u/" +
                        reducedTeam[0].data.base_id
                      }
                      alt="unit"
                      className="team-image"
                    ></img>
                  ) : (
                    <div></div>
                  )}
                </Col>
                <Col>
                  <h3 className="team-title">{teamName}</h3>
                </Col>
                <Col>
                  {" "}
                  <h4 className="team-info">
                    {/* https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */}
                    Power:{" "}
                    {totalPower
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
                  <h4 className="team-info">
                    Avg Power:{" "}
                    {avgPower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
                </Col>
              </Row>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {reducedTeam.map((unit) => {
                return <UnitInfo key={unit.data.base_id} unit={unit} />;
              })}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default TeamInfo;
