interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNO: number;
}

const ObjetosLiterales = () => {
    const persona: Persona= {
        nombreCompleto: 'Pedro',
        edad: 35,
        direccion: {
            pais: 'España',
            casaNO: 49
        }
    }
    return (
        <>
            <h3 className="fw-bold text-uppercase">Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    );
};

export default ObjetosLiterales;
