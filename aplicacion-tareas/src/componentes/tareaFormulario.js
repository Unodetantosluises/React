import React, {useState} from "react";
import '../hojas-de-estilo/tareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function Tareaformulario(props) {

    const [input, setInput] = useState('');

    const manjearCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        
        props.onSubmit(tareaNueva);
    }
    return(
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una Tarea'
            name='texto'
            onChange={manjearCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default Tareaformulario;