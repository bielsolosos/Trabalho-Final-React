import {api} from "./api"

//Get dos clientes
export const getALLClientes= () => {
    const url = '/clientes/listarClientes';
    return api.get(url);
}
