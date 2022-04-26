import *as React from 'react';
import { Link } from "react-router-dom";
import {Navbar,Nav,Container} from 'react-bootstrap';
import CartWidget from './CartWidget';

export default function NavbarReact() {
return(
<Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
  <Container className='m-0'>
  <Navbar  className='mx-5'>
    <Container className='m-0'>
      <div className='myLogo'>
      <Navbar.Brand as={Link} to="/" ><img  alt="Logo" src="logo1.jpg" width="150" height="120" className="d-inline-block align-top m-0"/> 
      </Navbar.Brand>
      </div>
    </Container>
  </Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto ">
      <Nav.Link as={Link} to="/">Inicio</Nav.Link>
      <Nav.Link as={Link} to="/Categorias">Productos</Nav.Link>
      <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link> 
      <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link> 
    </Nav>
    <Nav>
    <Nav.Link as={Link} to='/MyCart' >Carrito<CartWidget/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
};