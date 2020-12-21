import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = () => {
    return (
        <div>
        <h1>BIENVENIDO A ADIDAS</h1>
    
    <ItemCount Stock={9} Initial={1}/>
    </div> );
};

export default ItemListContainer;