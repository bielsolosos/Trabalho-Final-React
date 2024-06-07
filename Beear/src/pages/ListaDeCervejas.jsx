import React, { useState } from "react"

{/* Lembrar de importar de onde virá a api de cervejas como no modelo abaixo*/} 
{/* import {getAllCervas} from  '../../services/api'*/} 

export const ListaDeCervejas = ()=> {

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
         </ul>
        </>
    )
}