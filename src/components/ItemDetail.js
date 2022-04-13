import React from 'react'
import ItemCount from './ItemCount'
import { Button} from 'react-bootstrap';

const ItemDetail =({productDetail}) => {
  const {imagen, nombre, categoria, descripcion, precio, stock} = productDetail

  return (
    <div>
      <h2>Detalle de Productos</h2>
      <h3> {nombre}</h3>
        <img src={imagen} alt={nombre} />       
        <h6>{categoria}</h6>
        <p>{descripcion}</p>
        <p>Precio ${precio}</p>
        <small>Stock ${stock}</small>
        <div>
        <Button className="btn btn-primary my-2 mx-2" >Agregar al carrito</Button>
        </div>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail