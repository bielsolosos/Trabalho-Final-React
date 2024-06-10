import styles from "./botao.module.css";

export function Botao({ valor, onclick, title, subValor }){
    return(
        <>
            <button
                title={title}
                onClick={onclick}
                className={styles.botao}
            >
                {valor}
                <strong><p>{subValor}</p></strong>
            </button>
        </>
    )
}