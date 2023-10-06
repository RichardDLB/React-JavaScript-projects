import './App.css';
import logo from './img/logo.png';
import Boton from './componentes/Boton'

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo' 
          alt='logo' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>

        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
