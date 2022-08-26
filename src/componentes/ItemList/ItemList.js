import React from 'react'
import Item from '../Item/Item'


const ItemList = ({productos}) => {
  return (
    <ul>
         {productos.map (prod => <Item  key={prod.id} productos={prod}/> )}

    </ul>
  )
}

export default ItemList