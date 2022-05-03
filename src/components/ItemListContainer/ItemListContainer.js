import React from "react";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useListProduct from "../../hooks/useListProduct";

const ItemListContainer = () => {
    const {categoryId} = useParams()
    const {listaProductos, cargando} = useListProduct(categoryId) 

    return(     
        <div>             
            {cargando ? <div><Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner></div> : <ItemList listaProductos = {listaProductos} />       
            }    
        </div>
    )
}

export default ItemListContainer

