import React from 'react';

function boton({texto, botonClic, manejarClic}){
    return(
        <button
        className={botonClic ? 'botonClic' : 'botonReiniciar'}
        onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default boton;