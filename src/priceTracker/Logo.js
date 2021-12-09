import React from "react";
import { Col, Container, Row } from "reactstrap";
import logo from "../images/logo.png";
import Typewriter from "typewriter-effect";

export default function Logo() {
  return (
    <Container>
      <Row>
        <Col md="12" className="text-center myNavbar">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="navbarTitle">
            <Typewriter
              options={{
                strings: [
                  "Crypto Currency Tracker with React!",
                  "developed by Musobek Madrimov!",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </h1>
        </Col>
      </Row>
    </Container>
  );
}
