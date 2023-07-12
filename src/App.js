import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03doblecontador from './component/C03doblecontador';

function App() {
  return (
    <div>
      <h3>Primer Componente</h3>

      <C01componente />
      <h3>Segundo Componente</h3>
      <C02contador />
      <h3>Tercer Componente</h3>
      <C03doblecontador />

    </div>
  );
}

export default App;
