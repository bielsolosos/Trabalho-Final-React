import {api} from "./api"

//Get dos clientes
export const getALLClientes= () => {
    const url = '/clientes/listarClientes';
    return api.get(url);
}

export const criarCliente = async (cliente) => {
    try {
        const url = `/clientes/cadastrar`
      const response = api.post(url,cliente, {
        headers: {
          "Access-Control-Allow-Origin*": "",
          Authorization: "Bearer + token",
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      throw error;
    }
  };