export function Botao({ valor, onclick, title }){
    return(
        <>
            <button
                title={title}
                onClick={onclick}
            >
                {valor}
            </button>
        </>
    )
}