//Hora de fazer o temido Carrinho!!!
import { useContext } from "react";
import { cartContext } from "../../context/carrinhoContext";
import "./Carrinho.module.css";

export function Carrinho() {
  const {cartItems, adicionarItens, removerItens, limparCarrinho, calcularValorTotal } =
    useContext(cartContext);

    useEffect(() => {
        calcularValorTotal();
      }, [cartItems]);
    
    return (
        <div className="cart">
          <h2>Seu Carrinho</h2>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>{item.quantity}</span>
                  <span>{item.unitPrice}</span>
                  <button onClick={() => removerItens(item.id)}>Remover</button>
                </div>
              ))}
            </div>
          )}
          <div className="cart-total">
            <span>Total: </span>
            <span>{calcularValorTotal}</span>
          </div>
          <button onClick={limparCarrinho}>Limpar Carrinho</button>
        </div>
      );
}
