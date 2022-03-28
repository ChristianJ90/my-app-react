import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const product = "Productos"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer Productos = {product}/>
      <ItemDetailContainer />
    </div>
  );
}
export default App;
