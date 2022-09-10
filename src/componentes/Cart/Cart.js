import React from 'react';
import { CartContext, useCartContext } from '../../CartContext/CartContext';
import {Link} from 'React-Router-dom';
import ItemCart from '../ItemCart';

const Cart = () => {
    const {carrito,totalPrice} = useCartContext(CartContext);
    
    if ( carrito.length === 0){
        return(
            <>
              <p>No hay elementos en el carrito</p>
              <Link to="/"> comprar </Link>

            </>
        );
    }
  
  
    return (
    <div>
        <>
        {
            carrito.map (producto => <ItemCart key={producto.id} product={producto}/> )
        }
        <p>
            total : {totalPrice()}
        </p>
        
        </>


    </div>
  )
}

export default Cart