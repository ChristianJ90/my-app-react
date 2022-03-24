import React from "react";
import Item from "./Item";

export default function ItemListContainer() {
    
    return(
        setTimeout(() => {
            <div>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                </div>
        }, 2000)
    );
};

