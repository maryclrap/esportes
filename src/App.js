import './App.css';
import Header from './components/Header';
import SecaoCapa from './components/SecaoCapa';
import Produtos from './components/Produtos';
import SecaoSobre from './components/Sobre';
import SecaoContato from './components/Contato';

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/>     
      <Produtos/>
      <SecaoSobre/>
      <SecaoContato/>
    </div>
  );
}


export default App;
