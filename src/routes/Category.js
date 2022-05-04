import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'

const Category = () => {

  return (
      <div className=' flex-wrap'>
        <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="Banner\bannerVacuno.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
    
      </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item>
      <img
        className="d-block w-100"
        src="Banner\bannerPollo.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
       
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="Banner\bannerCerdo.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="Banner\bannerParrilleros.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>  
      <div className="d-flex align-top mx-5 justify-content-between">
       <Nav.Link className='mx-3' as={Link} to={`/Productos/Categoria/Carne`}><img  alt='Carne' width="250" height="200" src="Banner/vacuno.jpg"/></Nav.Link>
        <Nav.Link className='mx-3' as={Link} to={`/Productos/Categoria/Pollo`}><img  alt='Pollo' width="250" height="200" src="Banner/pollo.jpg"/></Nav.Link>
      <Nav.Link className='mx-3' as={Link} to={`/Productos/Categoria/Cerdo`}><img  alt='Cerdo' width="250" height="200" src="Banner/cerdo.jpg"/></Nav.Link>
      </div>
      <NavDropdown.Divider />
    <h1>Productos</h1>
       <ItemListContainer />
       </div>
  )
}

export default Category