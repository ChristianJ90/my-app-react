import *as React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Nosotros from './routes/Nosotros';
import Contacto from './routes/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import  Category  from './routes/Category';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import  Home  from './routes/Home';
import {products} from './data/data';
import db from './firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { fileUpload } from './firebase/fileUpload';
import Checkout from './components/Checkout';

function App() {
 
  const uploadCharacters = () => {
    
    products.forEach( async el => {
      const imgURL = await fileUpload( el.imagen)
     await addDoc(collection(db, "stock"),{ ...el, imagen: imgURL }) 
    });

  }

  return (
    <div className="App">
      <CartProvider>
      <Navbar/>
     
     <button onClick={uploadCharacters}>Subir Stock</button>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Productos" element={<Category/>} />
        <Route path="/Productos/Categoria/:categoryId" element={<Category/>} /> 
        <Route path="/Detalle/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/Nosotros" element={<Nosotros />} /> 
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/MyCart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
       
        <Route path="*" element={<Navigate to={"/"}/>} /> 
      </Routes> 
      </CartProvider>  
    </div>
  );
}

export default App;
