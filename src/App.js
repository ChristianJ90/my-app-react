import *as React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import  Category  from './components/Category';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';


function App() {
  const product = 'Mis productos'
  

  return (
    <div className="App">
      <CartProvider>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/Productos" element={<ItemListContainer/>} />
        <Route path="/Categorias" element={<Category/>} />
        <Route path="/Categorias/:categoryId" element={<Category/>} /> 
        <Route path="/Nosotros" element={<Nosotros />} /> 
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/MyCart" element={<Cart />} />
        <Route path="/Detalle/:item" element={<ItemDetailContainer productos = {product}/>} />
        <Route path="*" element={<Navigate to={"/"}/>} /> 
      </Routes> 
      </CartProvider>  
    </div>
  );
}
export default App;
