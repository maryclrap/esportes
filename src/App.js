import './App.css';
import Header from './components/Header';
import SecaoCapa from './components/SecaoCapa';
import Produtos from './components/Produtos';
import SecaoSobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/>     
      <Produtos/>
      <SecaoSobre/>
    </div>
  );
}


export default App;
