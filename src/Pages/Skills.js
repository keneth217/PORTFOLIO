import { useState } from 'react';
import { Button, Card, Collapse, Col, Container, Row } from 'react-bootstrap';

function Skills() {
  const [open, setOpen] = useState(false);
  const languages = ['Java', 'React', 'Vue'];
  const databases = ['MySQL', 'PostgreSQL'];

  return (
    <Container>
      <Row>
        <Col>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Database
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ minHeight: "150px" }}>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <Card body style={{ width: "50%" }}>
                  <Row>
                    <Col>
                      <Card.Title>Languages:</Card.Title>
                      <ul>
                        {languages.map((language, index) => (
                          <li key={index}>{language}</li>
                        ))}
                      </ul>
                    </Col>
                    <Col>
                      <Card.Title>Databases:</Card.Title>
                      <ul>
                        {databases.map((database, index) => (
                          <li key={index}>{database}</li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Collapse>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
