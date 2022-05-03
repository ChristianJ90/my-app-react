import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getDocs, collection, documentId, addDoc, Timestamp, writeBatch, query, where} from 'firebase/firestore';
import db from '../../firebase/config';
import { Navigate,Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const Checkout = () => {

    const {cart, cartTotal,emptyCart} = useContext(CartContext)
    const [orderId, setOrderId]= useState(null)

    const {values, handleInputChange, resetForm} = useForm({
        nombre: '',
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
    //query de busquda
    const q = query(productosRef, where(documentId(), 'in', cart.map((item) => item.id)))

    //traigo la coleccion
    const productos = await getDocs(q)

    const outOfStock =[]

    // itero para comparar y preparar batch
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

               // Navigate(`/orders/${doc.id}`)
                })
            })
        }else {
          console.log(outOfStock);
          alert('no hay stock de este item')
        }
    }

    if (orderId) {
        return <div >
            <h2>Tu compra fue exitosa</h2>
            <hr/>
            <h4>Numero de orden: {orderId} </h4>
            <Link to="/" className="btn btn-success">Volver al inicio</Link>
        </div>
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
            <input className='form-control my-2' type={'text'} name='nombre' value={values.nombre} onChange={handleInputChange}  placeholder='Nombre y Apellido'/>
            <input className='form-control my-2' type={'email'} name='email' value={values.email} onChange={handleInputChange}placeholder='Email'/>
            <input className='form-control my-2' type={'tel'} name='telf' value={values.telf} onChange={handleInputChange}placeholder='Telefono'/>
            <button className='btn btn-primary' type='submit'>Enviar</button>
            </form>
            <button className='btn btn-success' onClick={resetForm}>Vaciar</button>
        </div>
    )
}

export default Checkout