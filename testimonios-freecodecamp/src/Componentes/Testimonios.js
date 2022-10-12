//Al momento de crear estos archivos podremos usar la terminacion .js o .jsx
import React from 'react';
import '../hojaDeEstilos/Testimonio.css';

//Para usar props hay que identificar los elementos de cada componente
function Testimonio(props) {
    //Aqui colocalremos el contenedor principal de los testimonios
    return (
        <div className = 'contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={require(`../imagenes/testimonio-${props.imagen}.png`)}
            alt = 'Testiomonio de Emma' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}
                    </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                    </p>
                <p className='texto-testimonio'>
                    {props.testimonio}
                    </p>
            </div>
        </div>
    );
}

export default Testimonio;