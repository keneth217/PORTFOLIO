import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const [links, setLinks] = useState([
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "projects", link: "/projects" },
    { name: "contact us", link: "/contact" },
    {
      name: "others",
      link: "/others",
      subItems: [
        { name: "Others 1", link: "/others1" },
        { name: "Others 2", link: "/others2" },
        { name: "Others 3", link: "/others3" },
      ],
    },
  ]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">KENETH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text uppercase">
            {links.map((link) => (
              <React.Fragment key={link.name}>
                <Nav.Link href={link.link}>{link.name}</Nav.Link>
                {link.subItems && (
                  <NavDropdown title={link.name} id="basic-nav-dropdown">
                    {link.subItems.map((subItem) => (
                      <NavDropdown.Item key={subItem.name} href={subItem.link}>
                        {subItem.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                )}
              </React.Fragment>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
