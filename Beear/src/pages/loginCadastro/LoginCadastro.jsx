import React, { useState, useEffect } from 'react';
import { getALLClientes, criarCliente } from '../../services/clientes';
import './LoginCadastro.css';

export function LoginCadastro(){
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [cliente, setCliente] = useState({
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    senha: '',
    cep: '',
  });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

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

  const tentaLogar = () => {
    const user = usuarios.find(u => u.nome === login && u.senha === senha);
    if (user) {
        alert('Login bem-sucedido!');
        localStorage.setItem('usuario', login)
        window.location.reload();

    } 
    else {
        console.log('Usuário ou senha incorretos');
    }
};

const tentaCriar = async (e) => {
  e.preventDefault();
  try {
    const response = await criarCliente(cliente);
    alert('Cliente criado com sucesso!');
    console.log('Resposta da API:', response);
    window.location.reload();
  } catch (error) {
    console.log('Erro ao criar cliente.' + error);
  }
};

  return (
    <>
    <main>
      <div className={`logcontainer ${!isLoginForm ? 'move' : ''}`} id="logcontainer">
        <div className="formcontainer">
          <form className={`form form-login ${isLoginForm ? '' : 'hidden'}`} onSubmit={(event)=>{
                event.preventDefault();
            }} >
            <h2 className="title">Entrar</h2>
            <p className="text">utilize sua conta</p>
            <div className="inputcontainer">
              <input
                type="text"
                placeholder="Digite seu nome"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                style={{backgroundColor: '#fab45a',color: 'white' }}
              />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={{backgroundColor: '#fab45a',color: 'white'}}
              />
            </div>
            <button type="submit" className="button" onClick={tentaLogar}>Entrar</button>
            <p className="mobile-text">
              Não tem conta?
              <a href="#" id="open-register-mobile" onClick={toggleForm}>Registre-se</a>
            </p>
          </form>
          <form className={`form form-register ${isLoginForm ? 'hidden' : ''}`}>
            <h2 className="title">Criar Conta</h2>
            <p className="text">cadastre seu email</p>
            <div className="inputcontainer">
            <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={cliente.nome}
        onChange={handleChange}
        style={{backgroundColor: '#fab45a',color: 'white'}}
      />
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={cliente.telefone}
        onChange={handleChange}
        style={{backgroundColor: '#fab45a',color: 'white'}}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={cliente.email}
        onChange={handleChange}
        style={{backgroundColor: '#fab45a',color: 'white'}}
      />
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={cliente.cpf}
        onChange={handleChange}
        style={{backgroundColor: '#fab45a',color: 'white'}}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={cliente.senha}
        onChange={handleChange}
        style={{backgroundColor: '#fab45a',color: 'white'}}
      />
      <input
        type="text"
        name="cep"
        placeholder="CEP"
        value={cliente.cep}
        onChange={handleChange}
        style={{backgroundColor: '#fab45a',color: 'white'}}
      />
            </div>
            <button type="submit" className="button" onClick={tentaCriar}>Cadastrar</button>
            {mensagem && <p>{mensagem}</p>}
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
    </>
  );
};