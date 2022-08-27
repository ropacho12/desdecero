
import './App.css';
import Nabvar from './componentes/Navbar/Nabvar';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
// import Contador from './componentes/Contador/Contador';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
         <Nabvar/>
       
        <Routes>
          <Route path='/' element={<ItemListContainer  listaGeneral=' vista gral de productos' />}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer listaGeneral='Filtrado' />}/>
          <Route path='/detail/:ropaId'element={<ItemDetailContainer />}/>
           
        </Routes> 

        
      </BrowserRouter>
    
    </div>

  );
}

export default App;
