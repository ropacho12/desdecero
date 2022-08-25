
import './App.css';
import Nabvar from './componentes/Navbar/Nabvar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <Nabvar/>
      <ItemListContainer listaGeneral='Aca va la vista gral de productos'/>
    </div>
  );
}

export default App;
