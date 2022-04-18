import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Cart = () => {
    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)
    console.log(cart);
  return (
    <div >
      <h1>Tu Compra</h1>
      <hr/>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.imagen} alt={item.nombre} />
          <h4>{item.nombre}</h4>
          <h6>{item.categoria}</h6>
          <p>{item.descripcion}</p>
          <p>Cantidad : {item.cantidad}</p>
          <h5>Precio : ${item.precio * item.cantidad}</h5>         
          <small>Aun quedan {item.stock}</small><br/>
          <button className='btn btn-danger m-2' onClick={() => removeItem(item.id)} >
            <DeleteForeverIcon/>Eliminar producto</button>
          <hr/>

        </div>
      ))}
      <h3>Total: $ {cartTotal()}</h3>
      <hr/>
      <button className='btn btn-danger m-2' onClick={emptyCart} >Vaciar carrito</button>
      <Link to='/MyCart' className='btn btn-success m-2' >Ir a pagar</Link>
    </div>
  )
}

export default Cart
