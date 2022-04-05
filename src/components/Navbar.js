import *as React from 'react';
import { Routes, Route } from "react-router-dom";
import {Navbar,Nav,Container} from 'react-bootstrap';
import CartWidget from './CartWidget';

export default function NavbarReact() {
return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Nav.Link to="/">Logo</Nav.Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link to="/">Inicio</Nav.Link>
      <Nav.Link to="/Productos">Productos</Nav.Link>
      <Nav.Link to="/Nosotros">Nosotros</Nav.Link> 
      <Nav.Link to="Contacto/">Contacto</Nav.Link> 
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} to="/carrito"><CartWidget/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
};