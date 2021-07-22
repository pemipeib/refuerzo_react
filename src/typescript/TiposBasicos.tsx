// import React from 'react';

const TiposBasicos= () => {

    const nombre: string= 'Pedro';
    const edad: number= 50;
    const estaActivo: boolean= true;

    const poderes: string[]= ['Velocidad', 'Volar', 'Nadar'];

    return (
        <>
            <h3 className="fw-bold text-uppercase">Tipos básicos</h3>
            {nombre}, {edad}, {estaActivo? 'Activo' : 'Inactivo'}
            <hr/>
            {poderes.join(', ')}
        </>
    );
};

export default TiposBasicos;
