import React from "react";
import Item from "./Item";

const ItemList = ({stock}) => {

    return(
        <div className="d-flex flex-wrap">
            {stock.map((Item) => (
            <Item {...Item} key = {Item.id} />))}
        </div>
    );
};

export default ItemList

