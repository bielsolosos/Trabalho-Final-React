import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({children} ) => {
  const [cartItens, setCartItens] = useState([]);
  const [valorTotal, setValorTotal] = useState(0.0);

  function adicionarItens(produto) {
    // Garantir que valorUnitario é sempre um número
    const produtoComValorNumerico = {
      ...produto,
      valorUnitario: parseFloat(produto.valorUnitario)
    };
    !cartItens.includes(produtoComValorNumerico) && setCartItens([...cartItens, produtoComValorNumerico]);
  }

  const removerItens = (id) => {
    setCartItens((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
      ).filter((item) => item.quantidade > 0)
    );
  };

  const limparCarrinho = () => {
    setCartItens([]);
  };

  const calcularValorTotal = () => {
    let total = 0;
    cartItens.forEach((item) => {
      total += item.precoUnitario;
    });''
    setValorTotal(total.toFixed(2));
  };

  useEffect(() => {
    calcularValorTotal();
  }, [cartItens]);

  return (
    <CartContext.Provider
      value={{
        cartItens,
        adicionarItens,
        removerItens,
        limparCarrinho,
        valorTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
