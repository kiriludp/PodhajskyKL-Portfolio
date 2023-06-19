
import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/Navigation.css"







export default function Navigation () {
  return (
    <Navbar className="navigation">
      <Container fluid className="nav">
      <Nav className="me-auto">
        <Nav.Link href="/">About Me</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      </Container>
  </Navbar>


    );
  }
