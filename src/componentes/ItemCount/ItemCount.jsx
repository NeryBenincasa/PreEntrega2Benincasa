import React from 'react'
import './ItemCount.css'
import { useState } from 'react'

const ItemCount = (stock, onAdd) => {
    const [contador, setContador] = useState(1);

    let maximoStock = 10;

    const incrementar = () => {
        if (contador < maximoStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <div>
                <button onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button onClick={incrementar}> + </button>
            </div>
            <div>
                <button ClassName="Button" onClick={() => onAdd(contador)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )
}

export default ItemCount