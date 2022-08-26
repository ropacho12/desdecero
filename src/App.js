
import './App.css';
import Nabvar from './componentes/Navbar/Nabvar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Contador from './componentes/Contador/Contador';



function App() {
  return (
    <div className="App">
      <Nabvar/>
      <ItemListContainer listaGeneral='Aca va la vista gral de productos'/>
      <Contador stock={10}/>
    </div>
  );
}

export default App;
