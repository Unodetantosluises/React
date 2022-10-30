import React from 'react';
import '../hojasDeEstilo/Boton.css'

function boton({texto, esbotonClic, manejarClic}){
    return(
        <button
        className={esbotonClic ? 'botonClic' : 'botonReiniciar'}
        onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default boton;