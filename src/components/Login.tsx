import {useEffect, useReducer} from "react";

interface AuthState {
    validando: boolean;
    token: string | null;
    userName: string;
    nombre: string;
}

const initialState: AuthState= {
    validando: true,
    token: null,
    userName: '',
    nombre: ''
}

type LoginPayload= {
    userName: string;
    nombre: string;
}

type AuthAction=
    | {type: 'logout'}
    | {type: 'login', payload: LoginPayload};

const authReducer= (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type){
        case 'logout':
            return {
                validando: false,
                token: null,
                userName: '',
                nombre: ''
            }

        case "login":
            const {userName, nombre}= action.payload;
            return {
                ...state,
                token: '22',
                userName,
                nombre
            }

        default:
                return state;
    }
}

const Login = () => {
    const [{validando, token, nombre}, dispatch]= useReducer(authReducer, initialState);


        useEffect(() => {
            setTimeout(() => {
                dispatch({type: 'logout'});
            }, 1500);
        },[]);


    if (validando){
        return (
            <>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        );
    }

    const login= () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Pedro',
                userName: 'Periko'
            }}
        );
    }

    const logout= () => {
        dispatch({type: 'logout'});
    }

    return (
        <>
            <h3 className="fw-bold text-uppercase">Login - useReducer</h3>

            {
                (!token)
                    ? (<div className="alert alert-danger">No validado</div>)

                    : (<div className="alert alert-success">Hola: {nombre}</div>)
            }

            {
                (!token)
                    ? (<button
                        className="btn btn-primary m-2"
                        onClick={login}
                    >Login</button>)

                    : (<button
                        className="btn btn-danger m-2"
                        onClick={logout}
                    >LogOut</button>)
            }


        </>
    );
};

export default Login;
