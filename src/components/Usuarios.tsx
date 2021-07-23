import useUsuarios from "../hooks/useUsuarios";

const Usuarios = () => {

    const {paginaSiguiente, paginaAnterior, renderItem, usuarios, paginaRef}= useUsuarios();

    return (
        <>
            <h3 className="fw-bold text-uppercase">Usuarios - axios</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                {usuarios.map(renderItem)}
                </tbody>
            </table>

            {
                paginaRef.current !== 1
                    ?
                    <button
                        className="btn btn-primary m-1"
                        onClick={paginaAnterior}
                    >
                        Anterior
                    </button>
                    :
                    null
            }

            <button
                className="btn btn-primary m-1"
                onClick={paginaSiguiente}
            >
                Siguiente
            </button>
        </>
    );
};

export default Usuarios;

