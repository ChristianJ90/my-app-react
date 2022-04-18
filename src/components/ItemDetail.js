import React, { useContext,useState } from 'react'
import ItemCount from './ItemCount'
import { Link, useNavigate } from 'react-router-dom'
import Select from './Select'
import { CartContext } from '../context/CartContext'

const ItemDetail =({productDetail}) => {

  const options =[
    {value: 'kg', text: 'Kg' },
    {value: 'caja', text: 'Caja' },
  ]

  const {cart ,addItem ,isInCart} = useContext(CartContext)
  console.log(cart);

  const {id,imagen, nombre, categoria, descripcion, precio,stock} = productDetail

 const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
  }

  const [cantidad, setCantidad] = useState(1)
  const [unidad, setCant] = useState('kg')

  const agregarAlCarrito = () => {
    const itemToAdd = {
      id,
      imagen, 
      nombre, 
      categoria,
      descripcion, 
      unidad,
      precio, 
      cantidad
  }
  addItem(itemToAdd)
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
        <Select options={options} onSelect={setCant}/><br/><br/>
        {!isInCart(id) ?  <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={agregarAlCarrito}/>
        : <Link to='/MyCart' className='btn btn-success' >Terminar compra</Link>

        }
       

        <br/><br/> 
        <button className="btn btn-outline-success" onClick={ handleNavigate}>Atras</button>
    </div>
  )
}

export default ItemDetail