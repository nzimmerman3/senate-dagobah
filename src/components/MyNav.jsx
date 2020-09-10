import React from "react";
import { Navbar, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <div className="my-nav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Row className="nav-row" xs={2}>
            <Col>
              <Link to="/">
                <img
                  className="brand-nav"
                  src="/favicon.ico"
                  width="50"
                  height="50"
                  alt="brand"
                />
              </Link>
            </Col>
          </Row>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default MyNav;
