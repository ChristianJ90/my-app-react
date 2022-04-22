import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import  Carousel  from './Carousel';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase/config";


const ItemListContainer = (props) => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false);

    const {categoryId} = useParams()
    //console.log(categoryId);
    

    
useEffect(() =>{
    setCargando(true)

//1.- Armar la referencia
    const stockRef = collection(db,"Mi Stock")
//2.- Llamar (async) a esa referencia
    getDocs(stockRef)
    .then(resp => {
        const items = resp.docs.map((doc) => ({id: doc.id,...doc.data()}))
        console.log(items)
        setListaProductos(items)
    })
    .finally(() => { 
        setCargando(false)
    })
   /* getProducts
    .then((resp) => { 
        if (categoryId){
        setListaProductos(resp.filter((prod) => prod.categoria === categoryId))
    } else {
        setListaProductos (resp)
    }
    })
    .catch((error) => {
        console.log(error)
    })
    */
},[categoryId])

return(  
    <div>
        <Carousel/>
        <div>
        <h1>{props.products}</h1>
        {cargando ? <div><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner></div> : <ItemList listaProductos = {listaProductos} />       
        }   
        </div>    
    </div>
)
};

export default ItemListContainer

