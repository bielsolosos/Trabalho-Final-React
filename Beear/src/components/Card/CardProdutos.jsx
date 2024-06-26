import { useContext } from 'react';
import { CardProdutosEstyle } from './styleCard.js';
import { Botao } from '../Botao/Botao.jsx';
import { CartContext } from '../../context/carrinhoContext.jsx';

export function CardProdutos({ nome, descricao, valor }) {
  const { adicionarItens } = useContext(CartContext);

  const produto = { 
    nome : nome,
    descricao : descricao,
    precoUnitario: parseFloat(valor), 
  }

  const handleAddToCart = () => {
    adicionarItens(produto);
    console.log('aqui foi');
    console.log(typeof(produto.precoUnitario))
  };

  return (
    <CardProdutosEstyle>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p>{`${valor} R$`}</p>
      <Botao onclick={handleAddToCart} valor={'Adicionar ao Carrinho'} />
    </CardProdutosEstyle>
  );
}
