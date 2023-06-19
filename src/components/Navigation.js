
import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/Navigation.css"
import { Link } from "react-router-dom"






export default function Navigation () {
  return (
    <Navbar className="navigation">
      <Container fluid className="nav">
      <Nav className="me-auto">
        <Link to href="/">About Me</Link>
        <Link to href="/portfolio">Portfolio</Link>
        <Link to href="/resume">Resume</Link>
        <Link to href="/contact">Contact</Link>
      </Nav>
      </Container>
  </Navbar>


    );
  }
