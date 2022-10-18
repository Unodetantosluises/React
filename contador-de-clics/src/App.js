import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png';

function App() {
  return (
    <div className="App">
     <div className='logo-contenedor'>
      <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />
     </div>
     <div className='contenedor-principal'>
      <boton
      texto='Clic'
      botonClic={true}
      manejarClic={}
      />

      <boton
      texto='Reiniciar'
      botonClic={false}
      manejarClic={}
      />
     </div>
    </div>
  );
}

export default App;
