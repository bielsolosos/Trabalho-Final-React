import React, { useContext } from "react";
import { CartContext } from "../../context/carrinhoContext";
import styles from "./Carrinho.module.css";
import {getAllCervas} from  '../../services/produtos';

export function Carrinho() {
  const { cartItens, adicionarItens, removerItens, limparCarrinho, valorTotal } =
    useContext(CartContext);

  return (
    <div className={styles.carrinhoContainer}>
      <h1 className={styles.carrinhoTitulo}>Carrinho</h1>
      <div className={styles.carrinhoItens}>
        {cartItens.length === 0 ? (
          <p className={styles.carrinhoVazio}>Seu carrinho está vazio.</p>
        ) : (
          cartItens.map((item) => (
            <div key={item.id} className={styles.carrinhoItem}>
              <div className={styles.itemDetalhes}>
                <h2 className={styles.itemNome}>{item.nome}</h2>
                <p className={styles.itemDescricao}>{item.descricao}</p>
                <p className={styles.itemPreco}>Preço: R$ {item.valorUnitario}</p>
              </div>
              <div className={styles.itemAcoes}>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={styles.carrinhoTotal}>
        <h2>Total: R$ {valorTotal}</h2>
      </div>

      <div className={styles.carrinhoAcoes}>
        <button onClick={limparCarrinho} className={styles.botaoLimpar}>Limpar Carrinho</button>
      </div>
    </div>
  );
}
