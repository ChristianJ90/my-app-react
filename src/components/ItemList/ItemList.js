import React from "react";
import Item from "../Item/Item";

const ItemList = ({listaProductos}) => {

    return(
        <div className="d-flex flex-wrap justify-content-between">
         {listaProductos.map((listaProductos) => (<Item {...listaProductos} key = {listaProductos.id} />))}          
        </div>
    );
};

export default ItemList

