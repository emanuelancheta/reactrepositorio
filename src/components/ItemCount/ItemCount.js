import React from "react";

const ItemCount = (props) => {

    const [contador, setContador] = React.useState(props.Initial);

    const sumarProducto = () => {
        if (contador <= props.Stock - 1) {
        setContador(contador + 1);
        } 
    };


    const removerProducto = () => {
        if (contador > 0) {
        setContador(contador - 1); 
        }
    };


   return (
    <div class="qty mt-5">
        <span onClick={removerProducto} class="minus bg-dark"><button>-</button></span>
        <input type="number" class="count" name="qty" value={contador}></input>
        <span onClick={sumarProducto} class="plus bg-dark"><button>+</button></span>
        <br></br>
        <br></br>
        <button id='botonAgregar'>Agregar al carrito</button>
    </div>
        )
};

export default ItemCount;


