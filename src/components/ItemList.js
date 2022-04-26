import React from "react";
import Item from "./Item";

const ItemList = ({listaProductos}) => {

    return(
        <div className="d-flex flex-wrap">
            {listaProductos.map((prod) => <Item prod ={prod} key = {prod.id} />)}
        </div>
    );
};

export default ItemList

