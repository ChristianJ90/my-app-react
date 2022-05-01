import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate } from 'react-router-dom'


const Cart = () => {
    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

    const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <div >
      {cart <= 0 ? <h1>Sin productos en el carrito</h1> : <h1>Tu Compra</h1> }     
      <hr/>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.imagen} alt={item.nombre} />
          <h4>{item.nombre}</h4>
          <h6>{item.categoria}</h6>
          <p>{item.descripcion}</p>
          <p>Cantidad: {item.cantidad}{item.unidad}</p>
          <h5>Precio: ${item.precio * item.cantidad}</h5>  
          {Number(item.stock) === Number(item.cantidad) ? <h1>Sin stock</h1>  :  <h6>Aun quedan {item.stock - item.cantidad}</h6>}        
          <br/>
          <button className='btn btn-danger m-2' onClick={() => removeItem(item.id)} >
            <DeleteForeverIcon/>Eliminar producto</button>
          <hr/>

        </div>
      ))}
      <h3>Total: $ {cartTotal()}</h3>
      <hr/>
      <button className='btn btn-outline-danger m-2' onClick={emptyCart} >Vaciar carrito</button>
      <Link to = '/Checkout' className='btn btn-outline-danger m-2'>Ir a pagar</Link>
      <button className="btn btn-outline-success" onClick={ handleNavigate}>Atras</button>
    </div>
  )
}

export default Cart
