import React from "react";
import { ItemCount } from './ItemCount';

const ItemListContainer = ({greeting}) => {
    const onAdd = () =>{
        console.log("Artículo agregado al carrito exitosamente :) ");
    }
    return(
        <>
        <h1 align='center'>{greeting}</h1>
        <ItemCount stock={20} initial={0} onAdd={onAdd}/>
        </>
        
    )
}

export default ItemListContainer;