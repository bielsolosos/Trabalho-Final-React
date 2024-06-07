import styles from "./botao.module.css";

export function Botao({ valor, onclick, title }){
    return(
        <>
            <button
                title={title}
                onClick={onclick}
                className={styles.botao}
            >
                {valor}
            </button>
        </>
    )
}