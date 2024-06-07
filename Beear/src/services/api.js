import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080/'
});

//Get dos Produtos!!!!
export const getAllCervas=()=>{
    const url = '/produtos'
    return api.get(url);
}


//Get dos clientes

export const getALLClientes= () => {
    const url = '/clientes/listarClientes';
    return api.get(url);
}

