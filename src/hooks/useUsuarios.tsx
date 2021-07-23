import {useEffect, useRef, useState} from "react";
import {ReqResListado, Usuario} from "../interfaces/reqRes";
import {reqRaspApi} from "../api/reqRasp";

const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);


    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios= async () => {
        //Llamada a la API
        const resp= await reqRaspApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        }else {
            paginaRef.current --;
            alert('No hay más registros');
        }
    }

    const paginaSiguiente= () => {
        paginaRef.current ++;
        cargarUsuarios();

    }

    const paginaAnterior= () => {
        paginaRef.current --;
        cargarUsuarios();
    }

    const renderItem= (usuario: Usuario) => {

        const {first_name, last_name, email, id, avatar}= usuario;

        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{
                            width: 30,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        );
    }

    return {paginaSiguiente, renderItem, usuarios, paginaAnterior, paginaRef}
};

export default useUsuarios;
