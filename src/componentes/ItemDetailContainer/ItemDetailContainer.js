
import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import {galeriaById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useCart } from '../../CartContext/CartContext'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState()    
    const {ropaId}= useParams()

    const {carrito}= useCart()


    // console.log(ropaId)

    useEffect(() =>{
      galeriaById(ropaId)
        .then(detail =>{
          setDetail(detail)
        })
        .catch((error) =>{
          console.log(error)
        })
    },[ropaId])

  return (
    <div className='ItemDetailContainer'> 
      <h1>acaa</h1>
      <ItemDetail {...detail}/>

<br></br>
<hr></hr>
      <h2>Carrito</h2>
      <ol>
        {carrito.map((item, i) => 
        <li key={i}>{item['producto_data'].name}</li>)}

      </ol>
    </div>
  )
}

export default ItemDetailContainer