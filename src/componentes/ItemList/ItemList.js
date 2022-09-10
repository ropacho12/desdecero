import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div >
        <h1 className='itemList'>este es el ItemList</h1>
        {productos.map (prod => <Item  key={prod.id} {...prod}/> )}
    </div>
  )
}

function ListaDeProductos({ productos }){
  // console.log( ':D productos es un... ', typeof(productos))
  // console.log( ':D productos > ', productos['productos'])

  return(
    <ol>
      {productos.map (prod => <Item  key={prod.id} {...prod}/> )}
    </ol>
  )
}

export default ItemList
export{ListaDeProductos}