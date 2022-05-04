import React, { useContext,useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link, useNavigate } from 'react-router-dom';
import Select from '../Select/Select';
import { CartContext } from '../../context/CartContext';
import { Nav } from 'react-bootstrap';

const ItemDetail =({id,imagen, nombre, categoria, descripcion, precio,stock}) => {

  const options =[
    {value: 'kg', text: 'Kg' },
    {value: 'caja', text: 'Caja' },
  ]

  const {cart ,addItem ,isInCart} = useContext(CartContext)
  console.log(cart)

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
  }

  const [cantidad, setCantidad] = useState(1)
  const [unidad, setUnidad] = useState('kg')

  const agregarAlCarrito = () => {
    const itemToAdd = {
      id,
      imagen, 
      nombre, 
      categoria,
      descripcion, 
      unidad,
      precio, 
      cantidad,
      stock
    }
    addItem(itemToAdd)
  }
  
  return (
    <div>
      <h2>Detalle de Productos</h2>
      <hr/>
      <img style={{ width: '25rem' , height: '20rem' }} class="img-fluid img-thumbnail rounded float-start " src={imagen} alt={nombre} />
      <h3> {nombre}</h3>            
      <h6>{categoria}</h6>
      <p>{descripcion}</p>
      <p>Precio ${precio}</p>
      <small>Stock: {stock}</small><br/>
      <Select options={options} onSelect={setUnidad}/><br/><br/>
      {! isInCart(id) ?  <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={agregarAlCarrito}/>
        :<div><button className='btn btn-outline'><Nav.Link  className='btn btn-outline-primary' as={Link} to='/MyCart' >Ir a mi carrito</Nav.Link></button>
        <button className="btn btn-outline-success" onClick={ handleNavigate}>Atras</button></div>
      }
      <br/><br/> 
      <hr/>     
      <br/><br/><br/>    
    </div>
  )
}

export default ItemDetail