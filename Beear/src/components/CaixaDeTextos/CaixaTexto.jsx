
export function CaixaTexto({titulo, passar, placeholder}){
    return(
        <>
        <input 
        type="text"
        title={titulo}
        onChange={passar}
        placeholder={placeholder} 
        />
        </>
    )
    
}
