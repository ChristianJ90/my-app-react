import *as React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Nosotros from './routes/Nosotros';
import Contacto from './routes/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import  Category  from './routes/Category';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import  Home  from './routes/Home';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <CartProvider>
      <Navbar/>
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
      <Footer />
      </CartProvider>  
    </div>
  )
}

export default App;
