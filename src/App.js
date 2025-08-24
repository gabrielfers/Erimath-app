import './App.css';
import Avaliacoes from './components/avaliacoes/Avaliacoes';
import Contato from './components/contato/Contato';
import Header from './components/header/Header';
import Inicio from './components/inicio/Inicio';
import SobreMim from './components/sobreMim/SobreMim';

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Avaliacoes />
      <SobreMim/>
      <Contato />
    </>
  );
}

export default App;
