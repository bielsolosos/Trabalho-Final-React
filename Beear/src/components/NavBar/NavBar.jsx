import beearBeerImg from "./BeearBeer.png";
import styles from "./NavbarStyle.module.css";
import { useNavigate } from "react-router-dom";
import { Botao } from "../Botao/Botao";

function Navbar() {

    let navegar = useNavigate(); // lembre de dar o comando "npm install react-router-dom" para não dar erro

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
        <div className={styles.navbar}>
                <div className={styles.navbarImg}><a href="#"><img src={beearBeerImg} alt="Imagem" /></a></div>
                <div className={styles.navbarMenu}>
                    <Botao title={'cópia não comédia'} onclick={mudarRotaHome} valor={'home'}>home</Botao>
                    <Botao title={'cópia não comédia'} onclick={mudarRotaCarrinho} valor={'carrinho'}>carrinho</Botao>
                    <Botao title={'cópia não comédia'} onclick={mudarRotaSobre} valor={'sobre'}>sobre</Botao>
                </div>
        </div>
    )
}

export default Navbar