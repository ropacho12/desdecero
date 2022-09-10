import React, { useMemo, useState } from 'react'

export const CartContext = React.createContext([]);

export function CartProvider(props){
    const [carrito, setCarrito] = useState([])

    function addCarrito(numero, producto){
        let prodObj = {
            producto_id: producto.id,
            cantidad_pedida:numero,
            producto_data: producto,
        }

        // console.log(':D cantidad Pedida > ', numero)
        // console.log(':D producto Pedido > ', producto)

        // console.log(':D prodObj > ', prodObj)

        carrito.push(prodObj)
        
        // console.log(':D nuevoCarrito > ', nuevoCarrito)
        console.log(':D carrito > ', carrito)

        setCarrito(carrito)

    }
const totalPrice =() =>{
    return carrito.reduce ((prev, act)=> prev + act.cantidad_pedida * act.precio, 0);

}

const totalProducts = () => carrito.reduce ((acumulador,productoActual) => acumulador + productoActual.cantidad_pedida, 0);


const clearCart = () => setCarrito ([])



    function removeCarrito(){
        console.log(':( removeCarrito')
    }

    
    function yaEstaEnCarrito(){
        console.log(':/ yaEstaEnCarrito')
    }

    const value = useMemo(()=> {
        return({
            carrito,
            addCarrito,
            removeCarrito,
            yaEstaEnCarrito,
            totalPrice,
            totalProducts,
            clearCart,
             
        })
    }, [carrito])


    return <CartContext.Provider value={value} {...props} />

}


export function useCart() {
    const context = React.useContext(CartContext);

    if(!context) {
        throw new Error(':D useCart debe estar dentro del proveedor CartContext')
    }

    return context;
}