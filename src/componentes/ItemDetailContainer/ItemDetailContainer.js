
import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import {galeriaById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState()
    
    const {ropaId} =useParams()



    useEffect(() =>{
        galeriaById(ropaId)
         .then(detail =>{
            setDetail(detail)
         })
         .catch(error =>{
            console.log(error)
         })

    },[ropaId])




  return (
    <div className='detalle'> 
        <h1>Detalle</h1>
        <h1>Detalle</h1>
        
        <ItemDetail {...detail}/>
    </div>
  )
}

export default ItemDetailContainer