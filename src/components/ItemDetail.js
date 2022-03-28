import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({productDetail}) {
  const {categoria, descripcion, imagen, nombre, precio} = productDetail
  return (
    <div>
        <img src={imagen} alt={nombre} />
        <h2>Detalle de producto : {nombre}</h2>
        <h6>{categoria}</h6>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail