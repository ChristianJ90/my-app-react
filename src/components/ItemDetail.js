import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetail =({productDetail}) => {
  const {id,imagen, nombre, categoria, descripcion, precio, stock} = productDetail

 //{const navigate = useNavigate()handleNavigate =() => {navigate(-1)}}
  const [cantidad, setCantidad] = useState(1)

  const agregarAlCarrito = (cantidad) => {
    const itemToAdd = {
      id,
      imagen, 
      nombre, 
      categoria,
      descripcion, 
      precio, 
      cantidad
  }
  console.log(itemToAdd);
}
  
  return (
    <div>
      <h2>Detalle de Productos</h2>
      <h3> {nombre}</h3>
        <img src={imagen} alt={nombre} />       
        <h6>{categoria}</h6>
        <p>{descripcion}</p>
        <p>Precio ${precio}</p>
        <small>Stock ${stock}</small>

        <ItemCount
        max={stock}
        cantidad={cantidad}
        setCantidad={setCantidad}
        onAdd={agregarAlCarrito}
        />
    </div>
  )
}

export default ItemDetail