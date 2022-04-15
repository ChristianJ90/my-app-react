import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import Select from './Select'

const options =[
  {value: 'kg', text: 'Kg' },
  {value: 'caja', text: 'Caja' },
]

const ItemDetail =({productDetail}) => {
  const {id,imagen, nombre, categoria, descripcion, precio,stock} = productDetail

 const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
  }

  const [cantidad, setCantidad] = useState(1)
  const [color, setColor] = useState('rojo')

  const agregarAlCarrito = (cantidad) => {
    const itemToAdd = {
      id,
      imagen, 
      nombre, 
      categoria,
      descripcion, 
      color,
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
        <small>Stock: {stock}</small>
        <Select options={options} onSelect={setColor}/><br/><br/>
        <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={agregarAlCarrito}/>
        <br/><br/> 
        <button className="btn btn-outline-success" onClick={ handleNavigate}>Atras</button>
    </div>
  )
}

export default ItemDetail