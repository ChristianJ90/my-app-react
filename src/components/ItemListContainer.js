import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../mocks/fakeApi";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false);

    const {categorias} = useParams()

    
useEffect(() =>{
    setCargando(true)

    getProducts
    .then((resp) => { 
        setListaProductos(resp.filter((products) => products.categoria === categorias))
        setListaProductos (resp)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => { 
        setCargando(false)
    })
},[])

return(  
    <div>
        <h1>{props.products}</h1>
        {cargando ? <div><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner></div> : <ItemList listaProductos = {listaProductos} />
        }       
    </div>
)
};

export default ItemListContainer

