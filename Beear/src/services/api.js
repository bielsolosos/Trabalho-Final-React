import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080/'
});

//Get das raças!
export const getAllCervas=()=>{
    const url = '/produtos'
    return api.get(url);
}


