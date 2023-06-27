import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

function Home() {
  return (
    <Container className='vh-100 bg-dark'>
      <Row className="p-5">
        <Col sm={8}>about me</Col>
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
  );
}

export default Home;
