
import './App.css';
import Nabvar from './componentes/Navbar/Nabvar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Contador from './componentes/Contador/Contador';



function App() {
  const Agregar = (cantidad) =>{
    alert (`agregaste ${cantidad} productos`)
  }

  return (
    <div className="App">
      <Nabvar/>
      <ItemListContainer listaGeneral='Aca va la vista gral de productos'/>
      <Contador stock={10} onAdd ={Agregar}/>
      
    
    </div>

  );
}

export default App;
