import React, {useState} from 'react';

const Contador = () => {
    const [valor, setValor] = useState<number>(0);

    const acumular= (numero: number) => {
        setValor(valor + numero);
    }

    return (
        <>
            <h3 className="fw-bold text-uppercase">HOOKS - UseState - Contador</h3>
            <hr/>
            <p>Contador: <span>{valor}</span></p>
            <button
                className="btn btn-success m-2"
                onClick={() => acumular(1)}
            >+1</button>
            <button
                className="btn btn-success m-2"
                onClick={() => acumular(-1)}
            >-1</button>
        </>
    );
};

export default Contador;
