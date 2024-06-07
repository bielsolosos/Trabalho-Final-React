import { CarrinhoDeCompras } from "../pages/CarrinhoDeCompras/CarrinhoDeCompras";
import { LoginCadastro } from "../pages/loginCadastro/LoginCadastro";
import { Route, Routes } from "react-router-dom";


export function Rotas() {
    // const user = obterPerfilUsuario();
    return (
      <Routes>
        <Route path="/" element={<CarrinhoDeCompras />} /> 
        <Route path="/login" element={<LoginCadastro/>} />  

      </Routes>
    );
  }