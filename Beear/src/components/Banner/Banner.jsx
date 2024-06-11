import './Banner.css';

export function Banner() {

    document.addEventListener('DOMContentLoaded', () => {
        const cartBar = document.getElementById('cart-bar');
        const cartCount = document.getElementById('cart-count');
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
        let itemCount = 0;
    
        addToCartBtn.addEventListener('click', () => {
            itemCount++;
            cartCount.textContent = itemCount;
            cartBar.classList.add('visible'); // Adiciona a classe 'visible' para exibir a barra do carrinho
        });
    });

    return (
        <div class="wrapper">
            <div class="cart-bar" id="cart-bar">
            <p>Itens no carrinho: <span id="cart-count">0</span></p>
            </div>
        <div class="container">
            <label class="card">
                <div class="row">
                    <div for="c1" class="icon"></div>
                    <div class="description">
                        <h1>Winter</h1>
                        <p>Winter has so much to offer -
                         creative activities</p>
                         <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label>
            <label class="card">
                <div class="row">
                    <div for="c2" class="icon"></div>
                    <div class="description">
                        <h1>Digital Technology</h1>
                        <p>Gets better every day -
                         stay tuned</p>
                         <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label>
            <label class="card">
                <div class="row">
                    <div for="c3" class="icon"></div>
                    <div class="description">
                        <h1>Globalization</h1>
                        <p>Help people all over the world</p>
                        <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label>
            <label class="card">
                <div class="row">
                    <div for="c4" class="icon"></div>
                    <div class="description">
                        <h1>New technologies</h1>
                        <p>Space engineering becomes
                         more and more advanced</p>
                         <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </label>
        </div>
    </div>
    );
};
