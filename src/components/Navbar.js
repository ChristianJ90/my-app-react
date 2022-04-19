import *as React from 'react';
import { Link } from "react-router-dom";
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap';
import CartWidget from '../CartWidget';

export default function NavbarReact() {
return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/"><img  alt="Logo" src="logo1.jpg" width="100" height="100" className="d-inline-block align-top"/> 
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Inicio</Nav.Link>
      <Nav.Link as={Link} to="/Categorias">Productos</Nav.Link>
      <NavDropdown className='color-black '  bg="dark" title="Categorias" id="basic-nav-dropdown">
      <NavDropdown.Item  bg="dark"><Nav.Link as={Link} to={`/Categorias/LoremA`}>LoremA</Nav.Link></NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item bg="dark"><Nav.Link as={Link} to={`/Categorias/LoremB`}>LoremB</Nav.Link></NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item bg="dark"><Nav.Link as={Link} to={`/Categorias/LoremC`}>LoremC</Nav.Link></NavDropdown.Item>
        </NavDropdown>
      <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link> 
      <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link> 
    </Nav>
    <Nav>
    <Nav.Link as={Link} to='/MyCart' ><CartWidget/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
};