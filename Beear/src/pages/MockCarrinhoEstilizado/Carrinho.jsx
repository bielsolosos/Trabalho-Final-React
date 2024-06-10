import style from "./CarrinhoStyle.module.css"

function Carrinho(){

    return(
        <div>
            <div className={style.carro}>
{/*vvvvv Aqui seria onde is produtos no carrinho apareceriam vvvvv*/}
                <div className={style.conteudo}></div>
            </div>
            <div className={style.resultado}>
                <h2>Resultado</h2> 
                <div className={style.cont}>
                    <ul>
                        <li><strong>Quant.Itens:</strong></li>
                        <li><strong>Preço final:</strong></li>
                    </ul>
                    <Botao title={'cópia não comédia'} valor={'Comprar'}/>
                </div>
            </div>
        </div>
    )
};

export default Carrinho;