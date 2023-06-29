import { useState } from 'react';
import { Button, Card, Collapse, Col, Container, Row } from 'react-bootstrap';
import "./Home.css";
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
     
       
          <div style={{ minHeight: "100%" }}>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <Card body style={{ width: "100%" }}>
                  <Row>
                    <Col>
                      <Card.Title>Languages:</Card.Title>
                      <ol>
                        {languages.map((language, index) => (
                          <li key={index}>{language}</li>
                        ))}
                      </ol>
                    </Col>
                    <Col>
                      <Card.Title>Databases:</Card.Title>
                      <ol>
                        {databases.map((database, index) => (
                          <li key={index}>{database}</li>
                        ))}
                      </ol>
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
