import { getALLClientes } from "../../services/api";
import React, { useState, useEffect } from "react"

export function Login(){
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);


    const fetchUsuarios = async () => {
        try {
            const response = await getALLClientes();
            setCervejas(response.data);
        } catch (error) {
            setError(error);
        }
    };

    // Atualiza toda vez q a gente seta um novo bglh
    useEffect(() => {
        fetchUsuarios();
    }, []);

    return(
        <>
        <h1>Lista de Cervejas da Beear Beer!</h1>
         <ul style={{color: "black"}}>
            {usuarios.map(users=>(
                <li key={users.id}>{`usuario: ${users.nome} senha: ${users.senha}`}</li>
            ))}

         </ul>


        </>
    )
}