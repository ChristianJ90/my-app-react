import React from "react";
import Item from "../Item/Item";

const ItemList = ({listaProductos}) => {

    return(
        <div className="d-flex flex-wrap">
         {listaProductos.map((listaProductos) => (<Item {...listaProductos} key = {listaProductos.id} />))}          
        </div>
    );
};

export default ItemList

