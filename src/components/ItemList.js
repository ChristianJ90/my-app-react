import React from "react";
import Item from "./Item";

const ItemList = ({listaProductos}) => {
    
    return(
        <div className="d-flex flex-wrap">
            {listaProductos.map((products) => <Item products ={products} key = {products.id} />)}
        </div>
    );
};

export default ItemList

