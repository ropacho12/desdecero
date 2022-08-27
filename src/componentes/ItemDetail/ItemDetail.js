
import './ItemDetail.css'
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({name, img, categoria}) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false)
  
  
  const Agregar = (cantidad) =>{
    setIrAlCarrito (true)
    
    console.log (`agregaste ${cantidad} productos`)
  }  
  
  return (
   
    
      <div className='itenL'>
      <h1>{name}</h1>
      <img className='itemImg'  src={img} alt={name}/>
      <p> {categoria} </p>

      <div>
        {
          irAlCarrito 
             ? <Link to='/cart'>Finalizar compra</Link>
             : <Contador stock={10} onAdd ={Agregar}/>
        }







      {/* <Contador stock={10} onAdd ={Agregar}/> */}
        {/* <Link to={`/detail/${id}`}> Ver Detalle</Link> */}
          {/* <Button onConfirm={add} stock={stock}/> */}
      </div>

    </div>
   
    
  )
}

export default ItemDetail






// 