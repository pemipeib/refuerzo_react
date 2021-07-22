
const Funciones= () => {
    const sumar= (a: number, b: number ): number => {
        return a+b;
    }



    return (
        <>
            <h3 className="fw-bold text-uppercase">Funciones</h3>
            <p>El resultado es {sumar(1, 3)}</p>
        </>
    );
};

export default Funciones;
