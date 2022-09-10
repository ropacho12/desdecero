
import './App.css';
import Nabvar from './componentes/Navbar/Nabvar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
// import Contador from './componentes/Contador/Contador';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';

import {CartProvider} from './CartContext/CartContext'

export default ()=> <CartProvider>
  <App/>
</CartProvider>

function App() {
  
  return (
    <BrowserRouter>
      <Nabvar/>
      <Routes>
        <Route path='/' element={<ItemListContainer  listaGeneral=' vista gral de productos' />}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer listaGeneral='Filtrado' />}/>
        <Route path='/detail/:ropaId'element={<ItemDetailContainer />}/>      
      </Routes>
    </BrowserRouter>
  );
}
