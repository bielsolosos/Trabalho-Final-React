//Hora de fazer o temido Carrinho!!!
import { useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/carrinhoContext";
import "./Carrinho.module.css";

const Carrinho = () => {
  const {cartItens, adicionarItens, removerItens, limparCarrinho, calcularValorTotal } =
    useContext(cartContext);

    useEffect(() => {
        calcularValorTotal();
      }, [cartItens]);
    
    return (
     <>
     </>
      );
}

export default Carrinho;