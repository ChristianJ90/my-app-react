import *as React from 'react';
import { Link } from "react-router-dom";
import {Navbar,Nav,Container} from 'react-bootstrap';
import CartWidget from '../../routes/CartWidget';

export default function NavbarReact() {

  return(
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container className='m-0'>
        <Navbar  className='mx-5'>
          <Container className='m-0'>
            <div className='myLogo'>
              <Navbar.Brand as={Link} to="/" className='font-weigth-bold '>Carniceria</Navbar.Brand>
            </div>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link className="mx-4" as={Link} to="/"><strong>Inicio</strong></Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/Productos"><strong>Productos</strong></Nav.Link>
            <Nav.Link className="mx-4" as={Link} to="/Nosotros"><strong>Nosotros</strong></Nav.Link> 
            <Nav.Link className="mx-4" as={Link} to="/Contacto"><strong>Contacto</strong></Nav.Link> 
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/MyCart' ><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)
}