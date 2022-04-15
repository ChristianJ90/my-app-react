import *as React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import { MyContext } from './context/MyContext';
import  Category  from './components/Category';

const product = 'Mis productos'

function App() {
  return (
    <div className="App">
      
      <MyContext.Provider value={{
        usuario: 'Christian', 
        apellido: 'Barrios'}}>

      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Productos" element={<ItemListContainer />} />
        <Route path="/Categorias/:categoryId" element={<Category />} /> 
        <Route path="/Nosotros" element={<Nosotros />} /> 
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Detalle/:item" element={<ItemDetailContainer productos = {product}/>} />
        <Route path="*" element={<Navigate to={"/"}/>} /> 
      </Routes>  
      </MyContext.Provider> 
    </div>
  );
}
export default App;
