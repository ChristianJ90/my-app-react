import React from 'react'
import ItemListContainer from '../components/ItemListContainer';
import { Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = () => {

  return (
      <div className=' flex-wrap'>
     
        <div className="d-flex align-top">
    <Nav.Link as={Link} to={`/Productos/Categoria/Carne`}><img  alt='Carne' width="200" height="200" src='../Productos/Carne/vacuno.JPG'/></Nav.Link>
    <Nav.Link as={Link} to={`/Productos/Categoria/Pollo`}><img  alt='Pollo' width="200" height="200" src='../Productos/Pollo/pollo.JPG'/></Nav.Link>
    <Nav.Link as={Link} to={`/Productos/Categoria/Cerdo`}><img  alt='Cerdo' width="200" height="200" src='../Productos/Cerdo/cerdo.JPG'/></Nav.Link>
    </div>
    <NavDropdown.Divider />
    <h1>Productos</h1>
       <ItemListContainer />
       </div>
  )
}

export default Category