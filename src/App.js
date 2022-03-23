import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer greeting={"Bienvenido, tienda de arte online."}/>
    </>
  );
}

export default App;
