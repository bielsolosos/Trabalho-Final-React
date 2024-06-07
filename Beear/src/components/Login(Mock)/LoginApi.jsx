import { getALLClientes } from "../../services/api";
import React, { useState, useEffect } from "react";
import { Botao } from "../Botao/Botao";

export function Login(){
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const fetchUsuarios = async () => {
        try {
            const response = await getALLClientes();
            setUsuarios(response.data);
        } catch (error) {
            setError(error);
        }
    };

    // Atualiza toda vez q a gente seta um novo bglh
    useEffect(() => {
        fetchUsuarios();
    }, []);

    const tentaLogar = () => {
        const user = usuarios.find(u => u.nome === login && u.senha === senha);
        if (user) {
            alert('Login bem-sucedido!');
        } else {
            console.log('Usuário ou senha incorretos');
        }
    };

    return (
        <>
        
            <div>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <Botao title={'copia não comédia'} onclick={tentaLogar} valor={Login}/>
            </div>
        </>
    );
}