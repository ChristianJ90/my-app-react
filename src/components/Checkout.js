import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import db from '../firebase/config'

const Checkout = () => {

const {cart, cartTotal} = useContext(CartContext)

//controlar multiples input
const [values, setValues] = useState({
    nombre: '',
    email: '',
    telf: ''
})

const handleInputChange = (e) => {
    setValues({
        ...values,
       [e.target.name]: e.target.value
    })
}
//control input individual
//const [nombre, setNombre] = useState("")
//const [email, setEmail] = useState("")
//const [telf, setTelf] = useState("")

//const handleNombre = (e) => {
 ///   setNombre(e.target.value)
//}

//const handleEmail = (e) => {   
//    setEmail(e.target.value)
//}

//const handleTelf = (e) => {
//    setTelf(e.target.value)
//}

const handleSubmit = (e) => {
    e.preventDefault()

    const orden = {
        items : cart,
        total : cartTotal(),
        comprador : {...values},
        fyh: Timestamp.fromDate(new Date())
        
    }

    const ordenesRef = collection(db, 'ordenes')

    addDoc(ordenesRef, orden)
    .then((doc) => {
    console.log(doc.id);
    })
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

    </div>
  )
}

export default Checkout