import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png';
import Tareaformulario from './componentes/tareaFormulario.js';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tareaformulario />
      </div>
    </div>
  );
}

export default App;
