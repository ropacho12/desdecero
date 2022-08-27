

import Item from '../Item/Item'


const ItemList = ({productos}) => {
  return (
    <div >
        <h1 className='itemList'>este es el ItemList</h1>
         {productos.map (prod => <Item  key={prod.id} {...prod}/> )}

    </div>
  )
}

export default ItemList