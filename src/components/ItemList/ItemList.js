import React from "react";
import Item from "../Item/Item";

const promiseItem = new Promise(() => {
  setTimeout(ItemList(Item), 2000);
});


function ItemList () {
  React.useEffect(() => {
    promiseItem().then(() => {
       Item.map((id, nombre, precio, url) => {
          return (
        <div>
          <p>{id}</p>
          <p>{nombre}</p>
          <p>{precio}</p>
        </div>);
      });
    });
  });
};

ItemList();

export default ItemList;
