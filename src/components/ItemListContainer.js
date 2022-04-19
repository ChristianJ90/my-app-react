import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../mocks/fakeApi";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import  Carousel  from './Carousel';


const ItemListContainer = (props) => {

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false);

    const {categoryId} = useParams()
    console.log(categoryId);

    
useEffect(() =>{
    setCargando(true)

    getProducts
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
    .finally(() => { 
        setCargando(false)
    })
},[categoryId])

return(  
    <div>
        <h1>{props.products}</h1>
        {"/" ?  <ItemList listaProductos = {listaProductos} /> :  <Carousel/>}
        <h1>{props.products}</h1>
        {cargando ? <div><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner></div> : <ItemList listaProductos = {listaProductos} />
        }       
    </div>
)
};

export default ItemListContainer

