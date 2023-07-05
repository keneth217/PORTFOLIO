import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Port() {
  return (
    <div className="container-fluid bg-dark text-white justify-content-center  mt-5">
      <Container fluid>
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <h5>About</h5>
            <ul className="list-unstyled d-flex">
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
          <Col xs={12} md={4} className="mb-3 ">
            <h5>Links</h5>
            <ul className="list-unstyled text-uppercase">
              <li>
                <a href="/"className="text-decoration-none p-2">home</a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none p-2">about</a>
              </li>
              <li>
                <a href="/projects" className="text-decoration-none p-2">projects</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <h5>Others</h5>
            <p>
            I'm just scratching the surface I still have got a long way to go, to get to where I want to be. Will you help me get there?

            </p>
            <p>Never give up. Believe in yourself. Be passionate. <br></br>
              Work smart. It’s never too late</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Port;
