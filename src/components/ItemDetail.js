import React from 'react'
import ItemCount from './ItemCount'
import { Button} from 'react-bootstrap';

const ItemDetail =({productDetail}) => {
  const {imagen, nombre, categoria, descripcion, precio} = productDetail
  return (
    <div>
        <img src={imagen} alt={nombre} />
        <h2>Detalle de producto : {nombre}</h2>
        <h6>{categoria}</h6>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <Button className="btn btn-primary my-2" >Agregar al carrito</Button>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail