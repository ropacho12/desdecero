
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './Nabvar.css'


const Nabvar = () => {
  return (
    
    <nav className='filtro'>
        
          <Link className='home' to='/'>
          Leo Messi Store

          </Link>
            
        
        <div > 
            <Link className='link-filtro' to='/categoria/titular'>Argentina</Link>
            <Link className='link-filtro' to='/categoria/suplente'>Barcelona</Link>
            <Link className='link-filtro'  to='/categoria/entrenamiento'>Psg</Link>
            
        </div>
        <CartWidget/>
    </nav>
 

  )
}

export default Nabvar