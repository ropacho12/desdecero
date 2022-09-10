import React from 'react'
import { useCartContext } from '../../CartContext/CartContext'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemCart = ({producto}) => {
const {removeCarrito }= useCartContext();



  return (
    <div>
       <div>
       <img src= {producto.img} alt={producto.titulo} />
       </div>
       <div>
          <p> titulo: {producto.categoria}</p>
          <p>cantidad: {producto.numero}</p>
          <p>precio: {producto.precio}</p>
          <p>total:{producto.numero * producto.precio}</p>
          <button onClick={()=> removeCarrito(producto.id)}>Eliminar</button>

       </div>



    </div>
  )
}
export default ItemCart