import {api} from "./api"

//Get dos Produtos!!!!
export const getAllCervas=()=>{
    const url = '/produtos'
    return api.get(url);
}