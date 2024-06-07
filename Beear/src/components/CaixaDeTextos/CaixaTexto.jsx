import styles from "./caixa.module.css";

export function CaixaTexto({titulo, passar, placeholder}){
    return(
        <>
        <input
        className={styles.CaixaTexto}
        type="text"
        title={titulo}
        onChange={passar}
        placeholder={placeholder} 
        />
        </>
    )
    
}
