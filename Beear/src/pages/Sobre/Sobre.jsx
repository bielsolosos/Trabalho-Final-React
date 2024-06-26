import React from "react";
import "./Sobre.css";
import Navbar from "../../components/NavBar/NavBar";

export function SobreNos() {
  return (
    <div className="sobreNos-container">
      <br /><br />
      <strong><h2>
        Bem-vindo à nossa casa de cervejas artesanais, onde a tradição se funde
        com a inovação para criar experiências cervejeiras únicas.
        </h2></strong>
      <h2>Nossa História</h2>
      <p>
        Nossa jornada começa com seis jovens empreendedores unidos por uma
        paixão em comum: a cerveja artesanal. Movidos pela visão de oferecer uma
        experiência única, decidimos transformar nossa paixão em um negócio.
        Buscamos incansavelmente as mais autênticas cervejas artesanais,
        compartilhando nosso compromisso com a qualidade e a sustentabilidade.
        Com cada garrafa que enviamos, renovamos nosso compromisso de inspirar
        outros a se juntarem a nós nessa emocionante jornada cervejeira.
      </p>
      <h2>Nossa Missão</h2>
      <p>
        Nosso objetivo é promover a cultura da cerveja artesanal, destacando a
        qualidade, autenticidade e sustentabilidade. Oferecemos uma seleção
        cuidadosa de cervejas excepcionais, provenientes de artesãos que
        compartilham nossa paixão pela excelência. Buscamos educar e inspirar
        nossos clientes, proporcionando experiências sensoriais únicas, enquanto
        nos comprometemos com práticas comerciais éticas e sustentáveis.
      </p>
      <div className="equipe-section">
        <h2>Nossa Equipe</h2>
        <div className="membro 1">
          <img src="../src/Images/Equipe.jpg/Alexandre.png" alt="Alexandre" />
          <p>Alexandre Carvalho Curzi</p>

        </div>
        <div className="membro 2">
          <img src="../src/Images/Equipe.jpg/Bruno.jpg" alt="Bruno" />
          <p>Bruno Queiroz Cariello</p>
        </div>
        <div className="membro 3">
          {/*Eu juro que eu ia estilizar mas admito que perdi a vontade quando vi q fez um html + css normal componentizado...*/}
          <img src="./src/Images/Equipe.jpg/Gabriel.png" alt="Gabriel" />
          <p>Gabriel Da Rocha Santos coutinho</p>
        </div>

        <div className="membro 4">
          <img src="./src/Images/Equipe.jpg/Eduardo.jpeg" alt="" />
          <p>Eduardo de Almeida e Silva</p>
        </div>

        <div className="membro 5">
          <img src="../src/Images/Equipe.jpg/Mateus.jpg" alt="" />
          <p>Mateus Pereira Daltro</p>
        </div>
      </div>
    </div>
  );
}
