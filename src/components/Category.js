import React from 'react'
import { Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

const Category = () => {
  return (
      <div className='d-flex flex-wrap'>
        <Nav.Link as={Link} to={`/Productos`}><Button className="btn btn-success d-grid" >LoremA</Button></Nav.Link>
       <Nav.Link as={Link} to={`/Categorias/LoremA`}><Button className="btn btn-success d-grid" >LoremA</Button></Nav.Link>
       <Nav.Link as={Link} to={`/Categorias/LoremB`}><Button className="btn btn-success d-grid" >LoremB</Button></Nav.Link>
       <Nav.Link as={Link} to={`/Categorias/LoremC`}><Button className="btn btn-success d-grid" >LoremC</Button></Nav.Link>
       <section>
       <ItemListContainer />
       </section>
       </div>
  )
}

export default Category