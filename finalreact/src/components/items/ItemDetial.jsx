import React from 'react'
import ItemCounts from '../ItemCounts'
import { useContext , useState } from 'react';
import CartContext from '../CartContext';
import zapa1 from '../../media/zapa1.jpg';
import zapa2 from '../../media/zapa2.jpg';
import zapa3 from '../../media/zapa3.jpg';
const ItemDetial = ({item:e}) => {
  const {addItem, clearCart} = useContext(CartContext);
   
  const[isInCart, setIsInCart ]=useState(false)

  function addToCart(qty){
     addItem(e, qty)
     setIsInCart(true);
   }
   const zapa = [
     zapa1,zapa2,zapa3
   ]
   let imgDZapa = zapa[e.id -1];
    return (
        <>
          <div className='contenedorCard'>
             <img src={imgDZapa} alt="zapatilla"/> 
             <ul>
                <li >Nombre del Articulo: {e.name}</li>
                <li>Categoria: {e.articulo}</li>
                <li>Precio: ${e.price}</li>
                <li>Masc/Fem: {e.gender}</li>
             </ul>
             {isInCart?
              <button  onClick={clearCart} >Vaciar Carrito</button>
              :
              <ItemCounts addToCart={addToCart} stock={e.stock} />
            }
            
          </div>
        </>
    )
}

export default ItemDetial
