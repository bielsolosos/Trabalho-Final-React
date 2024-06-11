import styled from "styled-components";

export const CardProdutosEstyle = styled.div`
  width: 500px;
  padding: 20px;
  background-color: #fab45a;
  border: solid #f1a036 4px;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Lista = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;

  li {
    margin: 10px; // Adicione margem entre os itens conforme necessário
  }
`;
