import React from 'react'
import  Carousel  from '../components/Carousel';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
  return (
    <div>
    <Carousel/>
    <h1>Ofertas de la semana</h1>
    <ItemListContainer/>
    </div>
  )
}

export default Home