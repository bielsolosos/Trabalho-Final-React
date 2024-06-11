import React, { useState, useEffect } from "react";
import { getAllCervas } from "../../services/produtos";
import { CardProdutos } from "../../components/Card/CardProdutos";
import { Lista } from "../../components/Card/styleCard";
import { Bloco } from "./BlocoCarrinho";
import { Carrinho } from "../../components/Carrinho/Carrinho";

export function CarrinhoDeCompras() {
  //const { adicionarItens, removerItens, limparCarrinho, calcularValorTotal } =
  //useContext(cartContext);

  const [cervejas, setCervejas] = useState([]);
  const [error, setError] = useState(null);

  //Da o Get fazendo um tratamento de erro foram 3 horas de revisão de JS pra sair isso
  const fetchCervejas = async () => {
    try {
      const response = await getAllCervas();
      setCervejas(response.data);
    } catch (error) {
      setError(error);
    }
  };

  // Atualiza toda vez q a gente seta um novo bglh
  useEffect(() => {
    fetchCervejas();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />

      <Bloco>
        <Lista>
          {cervejas.map((cerva) => (
            <li key={cerva.id}>
              <CardProdutos
                descricao={cerva.descricao}
                nome={cerva.nome}
                valor={parseFloat(cerva.precoUnitario)}
              />
            </li>
          ))}
        </Lista>
        <Carrinho />
      </Bloco>
    </>
  );
}
