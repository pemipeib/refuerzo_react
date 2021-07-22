import {useState} from "react";

import TiposBasicos from "./TiposBasicos";
import ObjetosLiterales from "./ObjetosLiterales";
import Funciones from "./Funciones";


const TypeScript= () => {
    const [clase, setClase] = useState(0);

    const cambioClase= () => {
        if(clase === 1){
            return <TiposBasicos/>;
        }else if(clase === 2){
            return <ObjetosLiterales/>;
        }else if(clase === 3){
            return <Funciones/>;
        }
    }

    return (
        <>
            <h2 className="fw-bold text-uppercase">Básico TypeScript</h2>
            <hr/>

            <div className="d-flex justify-content-center align-content-center">
                <button
                    className="btn btn-secondary m-2"
                    onClick={() => setClase(1)}
                >Tipos básicos</button>

                <button
                    className="btn btn-secondary m-2"
                    onClick={() => setClase(2)}
                >Objetos literales</button>

                <button
                    className="btn btn-secondary m-2"
                    onClick={() => setClase(3)}
                >Funciones</button>
            </div>

            <hr/>

            {cambioClase()}
        </>
    );
};

export default TypeScript;
