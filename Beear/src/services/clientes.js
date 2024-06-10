import {api} from "./api"

//Get dos clientes
export const getALLClientes= () => {
    const url = '/clientes/listarClientes';
    return api.get(url);
}

export const criarCliente = async (cliente, cep) => {
    try {
        const url = `/clientes/cadastrar/${cep}`
      const response = api.post(url);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      throw error;
    }
  };