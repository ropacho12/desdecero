import { galeria, galeriaByCategoria } from '../../asyncMock'
import {  useEffect, useState } from 'react'
// import ItemList, { ListaDeProductos } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { ListaDeProductos } from '../ItemList/ItemList';


const ItemListContainer = ({listaGeneral}) => {
   const [productos, setProductos] =useState([])

   const {categoriaId}=useParams()
     
    useEffect(() =>{
      const asyncFuncion = categoriaId ? galeriaByCategoria : galeria
        asyncFuncion (categoriaId).then(productos=>{
          setProductos(productos)
        }) 
        
        // .catch (error =>{
        //   console.log(error)
        // })


    //     if(!categoriaId){
    //       galeria().then (productos => {
    //         setProductos(productos)
    //      })
    // } else {
    //   galeriaByCategoria(categoriaId).then(productos =>{
    //     setProductos(productos)
    //   })

    // }
  },[categoriaId])



  return (
    <> 
      <h1>:D {listaGeneral}</h1>      
      {/* <ItemList productos={productos} /> */}
      <ListaDeProductos productos={productos}/>
    </>
  )
}

export default ItemListContainer


// {/* <ul>
//          {productos.map (prod => <li key={prod.id}>{prod.name}</li> )}

//       </ul>
//      */}