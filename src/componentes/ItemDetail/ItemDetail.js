import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'
import { CartContext } from '../../CartContext/CartContext';



export default function ItemDetail({stock, id, name, categoria, precio,img }) {
  const [irAlCarrito, setIrAlCarrito] = useState(0);
  
  const {totalPrice, totalProducts} = useContext (CartContext);


  const clickAdd = (stock)=>{
    setIrAlCarrito(stock)

   const productAdd ={
    id, name, precio
   }
  totalPrice (productAdd)
  
  }
const cantidad_pedida= totalProducts()



  return (
    <div>
     
      <h4>ItemDetail // {categoria}</h4>  
      <img className='itemImg' src={img} alt={name}/>
      <p> {categoria}</p>
      <p> {precio}</p>

      <div>
        {irAlCarrito === 0?
          (<Contador onAdd={clickAdd} stock={stock}/>
          
          ):  (
             <Link to='/Cart'>Finalizar compra</Link>
          )
          
          
        }
       </div> 
    
      
    </div>
  )
}
