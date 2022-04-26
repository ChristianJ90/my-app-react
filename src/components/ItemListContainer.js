import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import  Carousel  from './Carousel';
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase/config";


const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false);

    const {categoryId} = useParams()
    //console.log(categoryId);
    

    
useEffect(() =>{
    setCargando(true)

//1.- Armar la referencia
    const stockRef = collection(db,"Mi Stock")
    const q = categoryId ? query(stockRef, where('categoria','==', categoryId)): stockRef
//2.- Llamar (async) a esa referencia
    getDocs(q)
    .then(resp => {
        const items = resp.docs.map((doc) => ({id: doc.id,...doc.data()}))
        console.log(items)
        setListaProductos(items)
    })
    .finally(() => { 
        setCargando(false)
    })
},[categoryId])

return(  
    <div>
        <Carousel/>
        <div>
        <h1>Ofertas</h1>
        {cargando ? <div><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner></div> : <ItemList listaProductos = {listaProductos} />       
        }   
        
        </div>    
    </div>
)
};

export default ItemListContainer

