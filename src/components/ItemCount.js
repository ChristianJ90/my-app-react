import { Button } from "react-bootstrap"
import React from "react"



const ItemCount = ({max = 10,cantidad ,setCantidad ,onAdd}) => {

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad +1)
  }

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad -1)
  }

  return (
      <div>
        <Button variant="outline-primary" onClick={handleRestar} >-</Button>
        <span className='mx-2' >{cantidad}</span>
        <Button variant="primary" onClick={handleSumar} >+</Button>
        <br/>
        <Button variant="success my-2" onClick={onAdd} >Agreagar al carrito</Button>

      </div>
  );
}
export default ItemCount