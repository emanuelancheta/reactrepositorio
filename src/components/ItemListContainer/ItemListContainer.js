import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    return (
        <div>
        <h1>BIENVENIDO A ADIDAS</h1>

        <ItemList />
        
        <ItemCount Stock={9} Initial={1}/>
    </div> );
};

export default ItemListContainer;