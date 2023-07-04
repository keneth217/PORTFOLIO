import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Skills from "./Skills";
import Particles from "react-particles-js";

function Home() {
  return (
    <div className="container-fluid vh-100 p-5 justify-content-center bg-dark text-white">
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ffffff",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Container fluid>
        <Container>
          <Row className="text-align-center justify-content-center mt-5">
            <Col className="text-center justify-content-center mt-5">
              <h6 className="justify-content-center">Bonjour</h6>
              <h1>
                i am <br />
                kipyegon keneth
              </h1>
              <p>A student, learner, software engineer</p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col sm={8} className="mr-3">
            <div className="mt-4 d-flex flex-column justify-content-between">
              <h6 className="text-center p-3">how it all started</h6>
              <p>
                Ever since writing my first program and manipulating it to
                produce my desired output, the rest has been an absolute love
                of code. I still remember sitting in front of a computer and
                making it print "hello world" for the first time on my screen.
                Guess what! It was magic to me, and since then, I have
                developed a strong desire to learn coding. There is certainly
                yet more to learn, yet more to solve, yet more to build, and
                for this, I am very grateful.
              </p>
              <p>
                Skills/interests: HTML | BOOTSRAP | ANGULAR JS | TYPESCRIPT |
                FLUTTER | UI/UX DESIGN. I am eagerly grabbing onto any other
                programming languages, frameworks, or principles to solve
                modern problems with workable solutions. Never give up. Believe
                in yourself. Be passionate. Work hard. It’s never too late.
                I'm just scratching the surface; I still have a long way to go
                to get to where I want to be. Will you help me get there?
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="containercube text-center mt-4 ml-3">
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
        <Container className="mt-5">
          <Row>
            <Col>
              <h6></h6>
              <Skills />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
