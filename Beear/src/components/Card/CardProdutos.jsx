import {CardProdutosEstyle} from './styleCard.js';
import { Botao } from '../Botao/Botao.jsx';

export function CardProdutos ({nome, descricao, valor,}){


    return(
        <>
            <CardProdutosEstyle>
                <h2>{nome}</h2>
                <p>{descricao}</p>
                <p>{valor}</p>
                <Botao/>
            </CardProdutosEstyle>
        </>
    )
}