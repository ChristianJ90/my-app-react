import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="Banner\Americanos.jpg" alt="First slide"/>
        <Carousel.Caption>   
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="Banner\packAsadito.jpg" alt="Second slide"/> 
        <Carousel.Caption>    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="Banner\ofertaFiletillos.png" alt="Third slide"/>
        <Carousel.Caption>   
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels