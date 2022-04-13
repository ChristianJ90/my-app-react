import *as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';

const product = 'Mis productos'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Productos" element={<Productos/>} /> 
        <Route path="/Nosotros" element={<Nosotros />} /> 
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Detalle/:item" element={<ItemDetailContainer productos = {product}/>} />
        <Route path="*" element={<Navigate to={"/"}/>} /> 
      </Routes>   
    </div>
  );
}
export default App;
