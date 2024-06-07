import { CarrinhoDeCompras } from "../pages/CarrinhoDeCompras/CarrinhoDeCompras";
import { Route, Routes } from "react-router-dom";
import { LoginCadastro } from "../pages/loginCadastro/LoginCadastro";


export function Rotas() {
    // const user = obterPerfilUsuario();
    return (
      <Routes>
        <Route path="/" element={<CarrinhoDeCompras />} /> 
        <Route path="/login" element={<LoginCadastro/>} />  

      </Routes>
    );
  }