// import React from 'react'

const Item = ({productos}) => {
  return (
    <li>
      <h1>{productos.name}</h1>
      <img src={productos.img} alt={productos.name}/>
      
      
    
    </li>
  )
}

export default Item