import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getDocs, collection, documentId, addDoc, Timestamp, writeBatch, query, where} from 'firebase/firestore';
import db from '../../firebase/config';
import { Navigate,Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Checkout = () => {

   

    const {cart, cartTotal,emptyCart} = useContext(CartContext)
    const [orderId, setOrderId]= useState(null)

    const {values, handleInputChange, resetForm} = useForm({
        nombre: '',
        dni: '',
        email: '',
        telf: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            items : cart,
            total : cartTotal(),
            comprador : {...values},
            fyh: Timestamp.fromDate(new Date())         
        
        }
  
        //batch
        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'stock')

        const q = query(productosRef, where(documentId(), 'in', cart.map((item) => item.id)))

        const productos = await getDocs(q)

        const outOfStock =[]

        productos.docs.forEach((doc) => {
        const itemInCart = cart.find((item) => item.id === doc.id)

        if (doc.data().stock >= itemInCart.cantidad) {
            batch.update(doc.ref, {
                   stock: doc.data().stock - itemInCart.cantidad
               })
           }else {
               outOfStock.push(itemInCart)
           }
       })

        if (outOfStock.length === 0) {
            batch.commit()
            .then(() => {
                addDoc(ordenesRef, orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    emptyCart()

                })
            })
        }else {
          console.log(outOfStock);
          alert('no hay stock de este item')
        }
    }
  
    if (orderId) {
        return <div className=' py-5  navbar-fixed-bottom'>
            <h2>Tu compra fue exitosa</h2>
            <hr/>
            <h5>Numero de orden: {orderId} </h5>                      
            <Link to="/" className="btn btn-success">Volver al inicio</Link>
        </div>
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h2 className='my-4'>Checkout</h2><br/>

            <form onSubmit= {handleSubmit}>
            <TextField           
            fullWidth sx={{ m: 1, width: '50%' }}
             type={'text'} 
             label="Nombre y Apellido" 
             value={values.nombre} 
             name="nombre"
             onChange= {handleInputChange}                 
             placeholder='Nombre y Apellido'
              color="primary" />

            <TextField 
            fullWidth 
            sx={{ m: 1, width: '50%' }} 
            type={'text'} 
            label="DNI" 
            value={values.dni} 
            name="dni"
            onChange={handleInputChange} 
             placeholder='DNI' 
             color="primary" />

            <TextField 
            fullWidth 
            sx={{ m: 1, width: '50%' }} 
            type={'email'} 
            label="Correo Electronico" 
            value={values.email}
            name="email" 
            onChange={handleInputChange}
            placeholder='Email' 
            color="primary"/>

            <TextField 
            fullWidth 
            sx={{ m: 1, width: '50%' }} 
            type={'tel'} 
            label="Telefono" 
            name="telf"
            value={values.telf} 
            onChange={handleInputChange}
            placeholder='Telefono' 
            color="primary" /><br/>

        { values.telf && values.nombre && values.email && values.dni? 
            <Button className='mx-3 my-4' variant="contained" type='submit' endIcon={<SendIcon />}>Enviar</Button>   
            :<h5>Complete campos</h5> 
          
        }

            
            <Button className='mx-3 my-4' variant="outlined"  color="success" onClick={resetForm} startIcon={<DeleteIcon />}>Vaciar</Button> 
            </form> 
        </div>
    )
}

export default Checkout