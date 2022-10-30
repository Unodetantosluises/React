import React from 'react';
import '../hojasDeEstilo/Contador.css';

function Contador({numClics}){
    return(
        <div className='Contador'>
            {numClics}
        </div>
    );
}

export default Contador;