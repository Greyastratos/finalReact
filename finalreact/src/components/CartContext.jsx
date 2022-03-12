import { useState } from "react";
import { createContext } from "react"
 
const CartContext = createContext();
export function CartContextProvider({children}) {

    const [itemsCart, setItemsCart]=useState([]);

    function addItem(e, qty){
        if (isItemInCart(e.id)){
            let index = itemsCart.findIndex(i => i.id ===e.id)
            let copyCart = [...itemsCart];
            copyCart[index].qty += qty;
            setItemsCart(copyCart);
        }else{
            const itemToAdd = {...e, qty}
            setItemsCart([...itemsCart, itemToAdd])
        }
 
    }


    function isItemInCart(id){
        return itemsCart.some(function(f){
            return (f.id === id)
        })
    }

    function clearCart(){
        setItemsCart([]);
    }
    
    return(
        <CartContext.Provider value={{ addItem, itemsCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext