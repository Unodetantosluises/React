import './App.css';
/*
Esta es otra forma de importar una imagen.
*/
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
/*
Este es un hook muy usado en react en cualquiera apñliacion que tenga un nivel de interectividad, para actualizar algun componente. En este caso es el Contador.
*/
import { useState } from 'react';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png';

function App() {
  /*
  En esta constante tenemos un arreglo con dos elementos, el pirmero el valor que usaremos como el estado en este caso numClics este lo usaremos, guardaremos y actualizaremos y el segundo elemento es una funcion que nos va permitir utilizarlo.
  */
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

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
      <Contador numClics= {numClics}/>
      <Boton
      texto='Clic'
      esbotonClic={true}
      manejarClic={manejarClic}
      />

      <Boton
      texto='Reiniciar'
      esbotonClic={false}
      manejarClic={reiniciarContador}
      />
     </div>
    </div>
  );
}

export default App;
