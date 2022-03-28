import React from "react";
import Item from "./Item";

const ItemList = ({listaProductos}) => {
    
    return(
        <div className="d-flex flex-wrap">
            {listaProductos.map((product) => <Item product ={product} key = {product.id} />)}
        </div>
    );
};

export default ItemList

