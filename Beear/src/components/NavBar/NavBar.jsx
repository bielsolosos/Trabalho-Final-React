import React from "react";
import beearBeerImg from "./BeearBeer.png";
// import NavbarStyle from "NavbarStyle";

function Navbar() {
    return(
        <div className="navbar">
                <div className="navbar-img"><a href="#"><img src={beearBeerImg} alt="Imagem" /></a></div>
                <ul className="navbar-menu">
                    <li>home</li>
                    <li>carrinho</li>
                    <li>sobre</li>
                </ul>
        </div>
    )
}

export default Navbar