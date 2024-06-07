import React from "react";
import beearBeerImg from "./BeearBeer.png";
// import NavbarStyle from "NavbarStyle";
import {useNavigate} from "react-router-dom";


function Navbar() {

    let navegar = useNavigate();

    const mudarRotaHome = () =>{
        let rota = 'novaRota'; // colocar a rota da home
        navegar(rota);
    }

    const mudarRotaCarrinho = () =>{
        let rota = 'novaRota'; // colocar a rota do carrinho
        navegar(rota);
    }

    const mudarRotaSobre = () =>{
        let rota = 'novaRota'; // colocar a rota do sobre
        navegar(rota);
    }


    return(
        <div className="navbar">
                <div className="navbar-img"><a href="#"><img src={beearBeerImg} alt="Imagem" /></a></div>
                <ul className="navbar-menu">
                    <Botao title={'cópia não comédia'} onclick={mudarRotaHome} valor={Navbar}>home</Botao>
                    <Botao title={'cópia não comédia'} onclick={mudarRotaCarrinho} valor={Navbar}>carrinho</Botao>
                    <Botao title={'cópia não comédia'} onclick={mudarRotaSobre} valor={Navbar}>sobre</Botao>
                </ul>
        </div>
    )
}

export default Navbar