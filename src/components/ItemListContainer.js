import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProduct } from "../Mocks/fakeApi";


const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false);
    
useEffect(() =>{
    setCargando(true)
    getProduct
    .then((resp) => setListaProductos(resp))
    .catch((error) => console.log(error))
    .finally(() => setCargando(false))
},[])

return(  
    <div>
        <h1>{props.Productos}</h1>
        {cargando ? <p>Cargando....</p> : <ItemList listaProductos = {listaProductos} />
        }       
    </div>
)
};

export default ItemListContainer

