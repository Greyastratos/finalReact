import React, { useState } from 'react'

const ItemCounts = ({stock, addToCart}) => {
    const [count, setCount]=useState(1);

    //funcion suma 
    function suma(){
        if(count < stock){
            setCount(count +1);
        }
    }
       //funcion resta 
function resta(){
    if(count >1){
        setCount(count -1);
    }
}

    return (
        <div>
            <div>
                <button onClick={resta} >-</button>
                <span>{count}</span>
                <button onClick={suma} >+</button>
            </div>
            <div>
                <button on onClick={()=>{addToCart(count)}} >agregar al carrito</button>
                <small>stock disponible {stock}</small>
            </div>
        </div>
    )
}

export default ItemCounts
