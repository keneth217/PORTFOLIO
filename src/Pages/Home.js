import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import Figure from "react-bootstrap/Figure";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Skills from "./Skills";

function Home() {
  return (
    <div className="container-fluid vh-100 p-5 justify-content-centre bg-dark  text-white">
      <Container fluid>
      {/* <Container >
        <Row className="text-align-center justify-content-center mt-5">
          <Col className="text-align-center justify-content-center mt-5">
            <h6 className="justify-content-center">Bonjour</h6>
            <h1>
              i am <br />
              kipyegon keneth
            </h1>
            <p>
              <p>A student,learner,software engineer</p>
            </p>
          </Col>
        </Row>
      </Container> */}
      {/* <Container> */}
        <Row>
          <Col sm={8} className="mr-3">
            <h6 className="text-align-center justify-content-center p-3">how it all started</h6>
            Ever since writing my first program and manipulating it to produce
            my desired output,the rest has been an absolute love of code. I
            still remember sitting infront of a computer and making it to print
            "hello world" for the first time on my screen,guess what !!; it was
            magic to me and since then i have developed strong desire to learn
            coding. There is certainly yet more to learn,yet more to solve,yet
            more to build and for this i am very greatful. Skills/interests:
            HTML | BOOTSRAP | ANGULAR JS | TYPESCRIPT | FLUTTER | UI/UX DESIGN.
            I am eagerly grabbing onto any other programming languages,
            frameworks or principles to solving modern problems workable
            solutions. Never give up. Believe in yourself. Be passionate. Work
            hard. It’s never too late I'm just scratching the surface I still
            have got a long way to go, to get to where I want to be. Will you
            help me get there?
          </Col>
          <Col sm={4}>
            <div className="containercube ml-3">
              <div id="cube">
                <div className="face front">student</div>
                <div className="face back">engineer</div>
                <div className="face right">software</div>
                <div className="face left">problem</div>
                <div className="face top">learner</div>
                <div className="face bottom">solver</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
          <h6></h6>
            <Skills />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
