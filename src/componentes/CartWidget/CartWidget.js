import React from 'react'
import './CartWidget.css'
//  import { CartProvider } from '../../CartContext/CartContext'

export const CartWidget = () => {
//   const {totalPrice} = CartProvider();


   return (
     <>
        <img className='cart-img' src='imagenes/carrito.png' alt='CartWidget'/>
         {/* <span>{totalPrice() || '' }</span> */}
     </>
  );
}

export default CartWidget