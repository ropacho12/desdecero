
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, categoria }) => {
  return (
    <div className='itenL'>
      <h1>{name}</h1>
      <img className='itemImg'  src={img} alt={name}/>
      <p> {categoria} </p>

      <div>
        <Link to={`/detail/${id}`}> Ver Detalle</Link>
          
      </div>

    </div>
  )
}

export default Item