import { useContext } from 'react';
import { CardProdutosEstyle } from './styleCard.js';
import { Botao } from '../Botao/Botao.jsx';
import { CartContext } from '../../context/carrinhoContext.jsx';

export function CardProdutos({ nome, descricao, valor }) {
  const { adicionarItens } = useContext(CartContext);

  const produto = { 
    id: nome,
    descricao,
    valorUnitario: valor, 
  }

  const handleAddToCart = () => {
    adicionarItens(produto);
    console.log('aqui foi')
  };

  return (
    <CardProdutosEstyle>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p>{valor}</p>
      <Botao onClick={handleAddToCart} valor={'Adicionar ao Carrinho'} />
    </CardProdutosEstyle>
  );
}
