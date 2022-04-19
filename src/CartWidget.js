import *as React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useContext } from "react";
import { CartContext } from './context/CartContext';

const CartWidget = () => {

const {cartQuantity} = useContext(CartContext)

  return (

    <div>
       <ShoppingCartOutlinedIcon />{cartQuantity()}      
    </div>
    )
}

export default CartWidget