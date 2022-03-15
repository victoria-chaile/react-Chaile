
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/titulo/titulo';
import Input from './components/Input/input';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './ItemListContainer/ItemListContainer';


function App() {
  const array = ['b', 'c', 'd']
  let a = 'a'
  const newArray =[array]
  console.log(newArray);

  let titulo = 'Black and White'
  let saludo = '¡Bienvenidos a todos!'

  const fnIngreso = () => {
    console.log ('ingresando')
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = { saludo }/>
      <Titulo tituloProps= { titulo }  />
      
      <header className="App-header">
      <Input placeholder='Ingrese un producto aqui' ingreso={fnIngreso}/>
     
      </header>
    </div>
  );
}

export default App;
