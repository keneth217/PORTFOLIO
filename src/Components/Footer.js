import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="footer bg-primary text-white fixed-bottom mt-2">
      <Container fluid>
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

