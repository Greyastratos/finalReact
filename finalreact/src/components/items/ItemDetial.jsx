import React from 'react'
import ItemCounts from '../ItemCounts'
import { useContext , useState } from 'react';
import CartContext from '../CartContext';
import zapa from '../../media/zapa1.jpg';
const ItemDetial = ({item:e}) => {
  const {addItem, clearCart} = useContext(CartContext);
   
  const[isInCart, setIsInCart ]=useState(false)

  function addToCart(qty){
     addItem(e,qty)
     setIsInCart(true);
   }
    return (
        <>
          <div className='border-2 border-red-600 m-2' >
            <div className="imagen" > <img src={zapa} alt="zapatilla"/> </div>
             <div >Nombre del Articulo: {e.name}</div>
             <div>Categoria: {e.articulo}</div>
             <div>Precio: ${e.price}</div>
             <div>Masc/Fem: {e.gender}</div>
             {isInCart?
              <button on onClick={clearCart} >Vaciar Carrito</button>
              :
              <ItemCounts addToCart={addToCart} stock={e.stock} />
            }
          </div>
        </>
    )
}

export default ItemDetial
