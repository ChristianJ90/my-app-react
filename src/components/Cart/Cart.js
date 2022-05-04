import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, useNavigate } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Cart = () => {
  const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <div >
      {cart <= 0 ?  
      <div>
        <h2>Tu carrito esta vacio</h2>
        <ProductionQuantityLimitsIcon style={{ width: '30rem' , height: '28rem' }}/>
        </div>
      : <div><h3>Tu Compra</h3>    
      <hr/>
      {cart.map((item) => (
        <div key={item.id}>
          <img className="img-fluid img-thumbnail rounded float-start " src={item.imagen} alt={item.nombre} />
          <h5>{item.nombre}</h5>
          <h6>{item.categoria}</h6>
          <p>{item.descripcion}</p>
          <p>Cantidad: {item.cantidad}{item.unidad}</p>
          <h5>Precio: ${item.precio * item.cantidad}</h5>  
          {Number(item.stock) === Number(item.cantidad) ? <h3>Al concretar tu compra este producto quedara sin stock</h3>  :  <h6>Aun quedan {item.stock - item.cantidad}</h6>}        
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
      }
    </div>
  )
}

export default Cart
