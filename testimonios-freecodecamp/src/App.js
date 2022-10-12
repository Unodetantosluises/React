import './App.css';
import Testimonio from './Componentes/Testimonios';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
      nombre='Shaw Wang'
      pais='Singapur'
      imagen='shaun'
      cargo='Ingeniero de Software'
      empresa='Amazon'
      testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'
      />
      <Testimonio
      nombre='Sarah Chima'
      pais='Neigeria'
      imagen='sarah'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio='freeCodeCamp due la puerta de entrada a mi carrera como desarrolladora de sfotware. el plan de estudios bien estructurado llevo mis cnonociemientos de programacion de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba  para conseguir mi primer trabajo de desarrolladora en una empresa increible.'
      />
      <Testimonio
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='emma'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de Software en Spotify.'
      />
      </div>
    </div>
  );
}

export default App;
