import styles from "./botao.module.css"

export function Botao({ valor, onclick, title }) {
    return (
      <>
        <button
        className={styles.botao}
          title={title}
          onClick={onclick}
        >
          {valor}
        </button>
      </>
    );
  }