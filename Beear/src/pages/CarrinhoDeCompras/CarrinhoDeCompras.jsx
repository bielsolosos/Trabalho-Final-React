import React, { useState, useEffect } from "react"
import { Botao } from "../../components/Botao/Botao";
import {getAllCervas} from  '../../services/api';

export const CarrinhoDeCompras = ()=> {    

    //const { adicionarItens, removerItens, limparCarrinho, calcularValorTotal } =
    //useContext(cartContext);

     
    const [cervejas, setCervejas] = useState([]);
    const [error, setError] = useState(null);

    //Da o Get fazendo um tratamento de erro foram 3 horas de revisão de JS pra sair isso
    const fetchCervejas = async () => {
        try {
            const response = await getAllCervas();
            setCervejas(response.data);
        } catch (error) {
            setError(error);
        }
    };

    // Atualiza toda vez q a gente seta um novo bglh
    useEffect(() => {
        fetchCervejas();
    }, []);

    

    return(
        <>
        <h1>Lista de Cervejas da Beear Beer!</h1>
         <ul style={{color: "black"}}>
            {cervejas.map(cerva=>(
                <li key={cerva.id}>{cerva.nome}</li>
            ))}

         </ul>


        </>
    )
}