import React from "react";
import ItemCount from "./ItemCount";

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