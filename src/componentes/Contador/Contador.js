import { useState } from "react"
import { useCart } from "../../CartContext/CartContext";


const Contador = ({stock, producto}) => {

  // console.log('Contador producto --> ', producto)

  const {addCarrito, carrito} = useCart();
  const [count, setCount] = useState(1)
  
  const menos = ()=> {
    if (count > 1){ 
       setCount (count - 1)
      }
    }
   const mas= ()=>{
    if (count < stock){
      setCount (count + 1)
    }
   }
  
return (
  <div>
      <div>
        <button onClick={menos}>-</button>
        <span>{count}</span>
        <button onClick={mas}>+</button>
        <button onClick={ () => addCarrito(count, producto)}>Agregar al carrito</button>
        
      </div>  
  </div>
)
}


export default Contador