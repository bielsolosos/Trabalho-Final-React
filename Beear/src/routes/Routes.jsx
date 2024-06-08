import { CarrinhoDeCompras } from "../pages/CarrinhoDeCompras/CarrinhoDeCompras";
import { Route, Routes } from "react-router-dom";
import { LoginCadastro } from "../pages/loginCadastro/LoginCadastro";
import { PaginaPrincipal } from "../pages/PaginaPrincipal/PaginaPrincipal";

export function Rotas() {
    // const user = obterPerfilUsuario();

    // mudar o nome do elemento da primeira rota para o que usaremos como pagina principal
    return (
      <Routes>
        <Route path="/" element={<PaginaPrincipal/>} /> 
        <Route path="/login" element={<LoginCadastro/>} />  
        <Route path="/carrinhodecompras" element={<CarrinhoDeCompras/>} />
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    );
  }