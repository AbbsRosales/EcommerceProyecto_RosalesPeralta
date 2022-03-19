import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  const saludos = [{id:1, saludo:"Buenos días"},{id:2, saludo:"Buenas tardes"},{id:3, saludos:"Buenas noches"}];

  return (
    <>
      <Header/>
      <ItemListContainer greeting={"Bienvenido a tú tienda online."}/>

    </>
  );
}

export default App;
