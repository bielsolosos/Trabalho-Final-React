import React, { useState, useEffect } from "react"

{/* Lembrar de importar de onde virá a api de cervejas como no modelo abaixo*/} 
{/* import {getAllCervas} from  '../../services/api'*/} 

export const CarrinhoDeCompras = ()=> {

    const [cervejas, setCervas] = useState([]);
    const { adicionarItens, removerItens, limparCarrinho, calcularValorTotal } =
    useContext(cartContext);


    {/* lembrar de trocar "getAllCervas" pelo que estiver no import*/} 
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
        <h1>Lista de Cervejas da Beear Beer!</h1>
         <ul>
            {cervejas.map(cerva=>(
                <li key={cerva.id}>{cerva.name} {cerva.preco}</li>
            ))}

            <li>
                <p>{cervejas.name}</p>

                <Botao title={"botão para adicionar produto"} 
                valor={"clique aqui"} 
                onClick={adicionarItens}>Adicionar ao carrinho</Botao>


                <Botao title={"botão para remover produto"} 
                valor={"clique aqui"} 
                onClick={removerItens}>Remover do carrinho</Botao>
            </li>
         </ul>


        </>
    )
}