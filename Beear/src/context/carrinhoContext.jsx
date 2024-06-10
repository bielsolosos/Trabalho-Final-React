import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItens, setCartItens] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  const adicionarItens = (produto) => {
    setCartItens((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === produto.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        return [...prevItems, { ...produto, quantidade: 1 }];
      }
    });
  };

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
      total += item.quantidade * item.valorUnitario;
    });
    setValorTotal(total);
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
