import {useForm} from "../hooks/useForm";

const Formularios = () => {

    const {formulario, email, password, onChange}= useForm({
        email: 'email',
        password: 'pass'
    });

    return (
        <>
            <h3 className="fw-bold text-uppercase">Formularios</h3>

            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({target}) => onChange( target.value, 'email')}
            />

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Email"
                value={password}
                onChange={({target}) => onChange( target.value, 'password')}
            />

            <code>
                <pre>{JSON.stringify(formulario, null, 2)}</pre>
            </code>
        </>
    );
};

export default Formularios;
