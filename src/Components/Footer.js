import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="footer bg-warning text-white fixed-bottom mb-2">
      <Container fluid="md">
        <Row className="justify-content-center">
          <Col className="text-center">
            <span>@kipyegon keneth</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

