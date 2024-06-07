import React, { useState, useEffect } from 'react';
import { getALLClientes } from '../../services/api';
import './LoginCadastro.css';

const LoginCadastro = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await getALLClientes();
        setUsuarios(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchUsuarios();
  }, []);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = usuarios.find(u => u.nome === login && u.senha === senha);
    if (user) {
      alert('Login bem-sucedido!');
      window.location.href = '../Perfil.html';
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <main>
      <div className={`logcontainer ${!isLoginForm ? 'move' : ''}`} id="logcontainer">
        <div className="formcontainer">
          <form className={`form form-login ${isLoginForm ? '' : 'hidden'}`} onSubmit={handleLogin}>
            <h2 className="title">Entrar</h2>
            <p className="text">utilize sua conta</p>
            <div className="inputcontainer">
              <input
                type="text"
                placeholder="Digite seu nome"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <a href="#" className="link">Esqueceu a senha?</a>
            <button type="submit" className="button">Entrar</button>
            <p className="mobile-text">
              Não tem conta?
              <a href="#" id="open-register-mobile" onClick={toggleForm}>Registre-se</a>
            </p>
          </form>
          <form className={`form form-register ${isLoginForm ? 'hidden' : ''}`}>
            <h2 className="title">Criar Conta</h2>
            <p className="text">cadastre seu email</p>
            <div className="inputcontainer">
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu email" />
              <input type="password" placeholder="Digite sua senha" />
            </div>
            <a href="#" className="link">Esqueceu a senha?</a>
            <button type="submit" className="button">Cadastrar</button>
            <p className="mobile-text">
              Já tem conta?
              <a href="#" id="open-login-mobile" onClick={toggleForm}>Login</a>
            </p>
          </form>
        </div>
        <div className={`overlay ${!isLoginForm ? 'move' : ''}`}>
          <div className="overlaytext">
            <h2 className="title title-light">Já tem conta?</h2>
            <p className="text formtext-light">Faça o login com suas informações para acessar a nossa loja</p>
            <button className="button button-light" id="logar" onClick={toggleForm}>Logar</button>
          </div>
          <div className="overlaytext">
            <h2 className="title title-light">Bem Vindo!</h2>
            <p className="text formtext-light">Cadastre-se e conheça os produtos e nossa loja</p>
            <button className="button button-light" id="cadastrar" onClick={toggleForm}>Cadastre-se</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginCadastro;