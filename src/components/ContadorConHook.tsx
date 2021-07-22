import useCounter from "../hooks/useCounter";


const ContadorConHook = () => {

    const {valor, acumular}= useCounter(20);

    return (
        <>
            <h3 className="fw-bold text-uppercase">HOOKS - UseState - Contador con hook</h3>
            <hr/>
            <p>Contador con hook: <span>{valor}</span></p>
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

export default ContadorConHook;
