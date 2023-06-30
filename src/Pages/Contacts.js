import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";
function Contacts() {
  return (
    <Container fluid className="bg-dark vh-100 d-flex text-white align-items-center justify-content-center">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card className="text-center bg-dark text-white " style={{ width: '50vw' ,height:'50vh'}}>
            <Card.Header>contact me</Card.Header>
            <Card.Body>
              <Card.Title>fill the form below</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type your message here"/>
                  </Form.Group>
                </Form>
              </Card.Text>
              <Button variant="primary">submit</Button>
            </Card.Body>
            {/* <Card.Footer className="text-italic text-white">2 days ago</Card.Footer> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
