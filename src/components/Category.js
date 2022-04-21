import React from 'react'
import ItemListContainer from './ItemListContainer';
import { Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = () => {

  const product = 'Mis productos'

  return (
      <div className=' flex-wrap'>
        <h1>Productos</h1>
        <div className="d-flex align-top">
    <Nav.Link as={Link} to={`/Categorias/Carne`}><img  alt='Carne' width="200" height="200" src='../Productos/Carne/vacuno.JPG'/></Nav.Link>
    <Nav.Link as={Link} to={`/Categorias/Pollo`}><img  alt='Pollo' width="200" height="200" src='../Productos/Pollo/pollo.JPG'/></Nav.Link>
    <Nav.Link as={Link} to={`/Categorias/Cerdo`}><img  alt='Cerdo' width="200" height="200" src='../Productos/Cerdo/cerdo.JPG'/></Nav.Link>
    </div>
    <NavDropdown.Divider />
       <ItemListContainer productos = {product}/>
       </div>
  )
}

export default Category