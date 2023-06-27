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
  const [open, setOpen] = useState(false);
  const languages = ['Java', 'React', 'Vue'];
  const databases = ['MySQL', 'PostgreSQL'];
  return (
    <div className="container-fluid vh-100 p-5 justify-content-centre bg-dark text-white">
      <Container fluid>
        <Row className="p-5">
          <Col sm={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper, mauris nec semper lacinia, nisi lorem bibendum mauris,
            id feugiat lectus mauris nec lectus. Morbi id rutrum velit. Aliquam
            vestibulum ipsum vel tristique interdum. Phasellus cursus sagittis
            odio. Ut varius augue eu urna eleifend dapibus. Aliquam sit amet
            semper neque, sit amet efficitur dui. Aenean lacinia dolor sit amet
            quam malesuada, sed interdum lorem vestibulum. Etiam sed nulla
            feugiat, vulputate orci eu, dignissim elit. Integer vitae erat
            ipsum. Mauris auctor erat ac posuere cursus. Maecenas vestibulum,
            sem eget fermentum venenatis, sapien mi commodo urna, in gravida
            mauris sem in purus. Quisque fringilla auctor risus, vel fermentum
            lorem posuere sit amet. Sed sagittis erat id dolor egestas, in
            tincidunt lectus rutrum. Donec vel est mi.
          </Col>
          <Col sm={4}>
            <div className="container">
              <div id="cube">
                <div className="face front">1</div>
                <div className="face back">2</div>
                <div className="face right">3</div>
                <div className="face left">4</div>
                <div className="face top">5</div>
                <div className="face bottom">6</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row>
        <Col>
          <Skills/>
         
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
