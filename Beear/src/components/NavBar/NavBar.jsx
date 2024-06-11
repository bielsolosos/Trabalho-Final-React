import { useState, useEffect } from "react";
import beearBeerImg from "./BeearBeer.png";
import styles from "./NavbarStyle.module.css";
import { useNavigate } from "react-router-dom";
import { Botao } from "../Botao/Botao";

function Navbar() {

    let navegar = useNavigate(); // lembre de dar o comando "npm install react-router-dom" para não dar erro



    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const usuarioLogado = localStorage.getItem('usuario');
        if (usuarioLogado) {
            setUsuario(usuarioLogado);
        }
    }, []);

    const verificarLogin = () => {
        return usuario ? `Seja bem-vindo ${usuario}` : 'Olá visitante';
    }

    //Para colocar o Logout e o Cadastre-se
    const verificarLogin2 = () => {
        return usuario ? `Logout` : ' Cadastre-se';
    }
    
    const mudarRotaHome = () =>{
        let rota = '/'; // colocar a rota da home
        navegar(rota);
    }
    
    const mudarRotaCarrinho = () =>{
        let rota = '/carrinhodecompras'; // colocar a rota do carrinho
        navegar(rota);
    }
    
    const mudarRotaSobre = () =>{
        let rota = '/sobre'; // colocar a rota do sobre
        navegar(rota);
    }
    
    const mudarRotaLogin = () =>{
        let rota = '/login'; // colocar a rota do sobre
        navegar(rota);
    }
    
    const redirecionarRota = () => {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            // fiz usando Js puro pois nn consegui fazer funcionar a navegação
            localStorage.clear();
            window.location.reload();

        } else {
            window.location.href = '/login';
        }
    };
    
    return(
        <div className={styles.navbar}>
                <div className={styles.navbarImg}><a href="#"><img src={beearBeerImg} alt="Imagem" /></a></div>
                <div className={styles.navbarMenu}>

                    <Botao title={'cópia não comédia'} onclick={mudarRotaHome} valor={'home'}/>
                    <Botao title={'cópia não comédia'} onclick={mudarRotaSobre} valor={'sobre'}/>
                    <Botao title={'cópia não comédia'} onclick={mudarRotaCarrinho} valor={'carrinho'}/>
                    <Botao valor={verificarLogin()} subValor={verificarLogin2()} onclick={redirecionarRota}></Botao>
                    
                </div>
                <br />
        </div>
    )
}

//Galera por favor evitar usar export default... isso nçao é convencional
export default Navbar