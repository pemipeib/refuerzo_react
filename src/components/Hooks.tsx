import React, {useState} from 'react';

import Contador from "./Contador";
import ContadorConHook from "./ContadorConHook";
import Login from "./Login";

const Hooks = () => {
    const [clase, setClase] = useState(3);

    const cambioClase= () => {
        if(clase === 1){
            return <Contador/>;
        }else if(clase === 2){
            return <ContadorConHook/>;
        }else if(clase === 3){
            return <Login/>;
        }
    }

    return (
        <>

            <h2 className="fw-bold text-uppercase">Hooks</h2>

            <hr/>

            <div className="d-flex justify-content-center align-content-center">
                <button
                    className="btn btn-secondary m-2"
                    onClick={() => setClase(1)}
                >Contador</button>

                <button
                    className="btn btn-secondary m-2"
                    onClick={() => setClase(2)}
                >Contador con Hook</button>

                <button
                    className="btn btn-secondary m-2"
                    onClick={() => setClase(3)}
                >Login</button>
            </div>

            <hr/>

            {cambioClase()}
        </>
    );
};

export default Hooks;
