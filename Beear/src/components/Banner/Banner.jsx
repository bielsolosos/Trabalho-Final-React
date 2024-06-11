import { useNavigate } from 'react-router-dom';
import './Banner.css';

export function Banner() {

    return (
        <>
        <div class= 'title'>
            <h2>Bem-vindo à Beear Beer!</h2>
            <h5>Na Beear Beer, acreditamos que uma boa cerveja é muito mais do que uma bebida - é uma experiência que deve ser saboreada e compartilhada. Fundada por apaixonados por cerveja, nossa missão é criar rótulos únicos que encantem tanto os conhecedores quanto os curiosos.</h5>
            </div>
        <div class="wrapper">
        <div class="container">
            <label class="card">
                <div class="row">
                    <div for="c1" class="icon"></div>
                    <div class="description">
                        <h1>Ipa</h1>
                        <p>Descubra a potência e a elegância da Imperial Cold Black IPA, uma obra-prima artesanal que desafia os limites tradicionais de uma India Pale Ale. Com um robusto teor alcoólico e uma profundidade de sabor sem igual, esta cerveja é uma celebração da arte cervejeira em sua forma mais audaciosa.</p>
                         <button class="add-to-cart-btn" onClick={mudarRotaCarrinho()}>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label>
            <label class="card">
                <div class="row">
                    <div for="c2" class="icon"></div>
                    <div class="description">
                        <h1>Bock</h1>
                        <p>Descubra a Bock, uma cerveja robusta e rica, perfeita para aqueles que apreciam sabores profundos e bem definidos. Esta Bock, com sua herança alemã, é uma verdadeira joia do universo cervejeiro, ideal para ser saboreada em momentos especiais ou para transformar qualquer ocasião em uma celebração.</p>
                         <button class="add-to-cart-btn" onClick={mudarRotaCarrinho()}>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label>
            <label class="card">
                <div class="row">
                    <div for="c3" class="icon"></div>
                    <div class="description">
                        <h1>Mouse Beer</h1>
                        <p>Experimente a sofisticação e a profundidade da Mouse Bock, uma cerveja que capta a essência das tradições cervejeiras alemãs. Esta Bock é a escolha ideal para os amantes de cervejas encorpadas e ricas, trazendo uma complexidade de sabores que encantam e satisfazem o paladar.</p>
                        <button class="add-to-cart-btn" onClick={mudarRotaCarrinho()}>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label>
            <label class="card">
                <div class="row">
                    <div for="c4" class="icon"></div>
                    <div class="description">
                        <h1>Beear Classic</h1>
                        <p>Conheça a Beear Lager, uma cerveja de estilo clássico que captura a essência refrescante e equilibrada das melhores lagers. Ideal para qualquer ocasião, a Beear Lager é a escolha perfeita para quem busca uma cerveja leve, mas cheia de sabor.</p>
                         <button class="add-to-cart-btn" onClick={mudarRotaCarrinho()}>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label>
            <label class="card">
                <div class="row">
                    <div for="c5" class="icon"></div>
                    <div class="description">
                        <h1>Pilsen</h1>
                        <p>Descubra a Beear Pilsen, uma cerveja que representa a quintessência das clássicas Pilsners. Com sua cor dourada brilhante e sabor refrescante, esta cerveja é perfeita para qualquer ocasião, oferecendo uma experiência de degustação limpa e equilibrada.</p>
                         <button class="add-to-cart-btn" onClick={mudarRotaCarrinho()}>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label> 
        </div>
    </div>
    </>
    );
};
