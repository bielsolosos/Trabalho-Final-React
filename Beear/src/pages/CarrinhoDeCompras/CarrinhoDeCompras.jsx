import React, { useState } from "react"

{/* Lembrar de importar de onde virá a api de cervejas como no modelo abaixo*/} 
{/* import {getAllCervas} from  '../../services/api'*/} 

export const CarrinhoDeCompras = ()=> {

    const [cervejas, setCervas] = useState([]);

    function obterCervejas(){
        getAllCervas().then((beer)=>{
            setCervas(beer.data.results)
        }).catch((erro) => {
            console.log(erro)
        });
    }

    useEffect(()=>{
        obterCervejas();
     },[]);

    return(
        <>
        <h1>Lista de Cervejas da Bear Beer!</h1>
         <ul>
            {cervejas.map(cerva=>(
                <li key={cerva.index}>{cerva.name}</li>
            ))}

            <li>
                <p>{cervejas.name}</p>

                <Botao title={"botão para adicionar produto"} 
                valor={"clique aqui"} 
                onClick={contar}>Adicionar ao carrinho</Botao>

                <Botao title={"botão para remover produto"} 
                valor={"clique aqui"} 
                onClick={contar}>Remover do carrinho</Botao>
            </li>
         </ul>


        </>
    )
}