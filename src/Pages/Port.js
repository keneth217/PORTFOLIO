import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Port() {
  return (
    <div className="bg-dark text-white">
      <Container fluid>
        <Row>
        <Col xs={12} md={4} className="mb-3">
      <h5>About</h5>
      <ul className="list-unstyled d-flex justify-content-center">
        <li className="mr-3 p-2">
          <a href="/" className="text-decoration-none">
            <FaFacebook />
          </a>
        </li>
        <li className="mr-3 p-2">
          <a href="/about" className="text-decoration-none">
            <FaTwitter />
          </a>
        </li>
        <li className="mr-3 p-2">
          <a href="/projects" className="text-decoration-none">
            <FaGithub />
          </a>
        </li>
        <li className="mr-3 p-2">
          <a href="/linkedin-profile" className="text-decoration-none">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </Col>
          <Col xs={12} md={4} className="mb-3">
            <h5>Links</h5>
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/about">about</a>
              </li>
              <li>
                <a href="/projects">projects</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <h5>Others</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Port;
