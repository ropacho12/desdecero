import { galeria } from '../../asyncMock'
import {  useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({listaGeneral}) => {
   const [productos, setProductos] =useState([])
     
    useEffect(() =>{
        galeria().then (productos => {
           setProductos(productos)
            
        })
    }, [])
  return (
    <> 
      <h1>{listaGeneral}</h1>
      {/* <ul>
         {productos.map (prod => <li key={prod.id}>{prod.name}</li> )}

      </ul>
     */}
     <ItemList productos ={productos}/>
    
    </>
  )
}

export default ItemListContainer