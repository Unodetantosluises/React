import React from "react";
import '../hojas-de-estilo/tareaFormulario.css';

function Tareaformulario(props) {
    return(
        <form className='tarea-formulario'>
            <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una Tarea'
            name='texto'
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default Tareaformulario;