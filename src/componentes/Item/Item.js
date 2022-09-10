
import './Item.css'
import { Link } from 'react-router-dom'
// import React, { useContext } from 'react'
//  import { CartContext } from '../../CartContext/CartContext'

const Item = ({id, name, img, categoria, precio }) => {
  // const {nombre} = useContext (CartContext);
  //  console.log ("Item", nombre);

  return (
    <div className='itenL'>
      <h1>{name}</h1>
      <img className='itemImg' src={img} alt={name}/>
      <p> {categoria} </p>
      <p>precio final ${precio} </p>
      <div>
        <Link to={`/detail/${id}`}> Ver Detalle</Link>
      </div>
    </div>
  );
}

export default Item;