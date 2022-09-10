import React from 'react'
import {useState, useContext} from 'react';
// import Item from '../componentes/Item/Item';
// import ItemDetail from '../componentes/ItemDetail/ItemDetail';
 
const CartContext =  React.createContext ([]);

export const useCartContext = () => useContext (CartContext);

const CartProvider= ( {children}) => {
   const [cart, setCart] = useState ([]);

  const addProduct = (item, nuevaCantidad) => {
    const nuevoCarrito = cart.filter (prod => prod.id !== item.id);
    nuevoCarrito.push ({ ...item, cantidad : nuevaCantidad});
    setCart(nuevoCarrito)
  }

  

   const agregarCarrito = () =>{
    console.log ("agregarCarrito")
   }

   const clearCart = () => setCart ([]);

   const isInCart = (id) => cart.find (product => product.id === id) ? true:false;

   const removeProduct = (id) => setCart (cart.filter(product => product.id !==id));



  return (
    <CartContext.Provider value={{
         clearCart,
         isInCart,
         removeProduct,
         agregarCarrito,
         addProduct
       }}>
       {children}
    </CartContext.Provider>
  )
}

export default CartProvider