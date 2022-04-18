import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import {Nav} from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { CartContext } from './context/CartContext';

const CartWidget = () => {

const {cartQuantity} = useContext(CartContext)

  return (
    <div><Nav.Link as={Link} to='/MyCart' ><ShoppingCartOutlinedIcon/></Nav.Link>
    <span>{cartQuantity()}</span>
    </div>
  )
}

export default CartWidget