import React from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";

export default function ItemListContainer() {

    return(
        <div>
            <ItemCount>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </ItemCount>
        </div>
    );
}