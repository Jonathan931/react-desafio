import api from "./api";

export const serviceBolsas = {
	
	buscar : async() =>{
		const retorno = await api.get(`redealumni/scholarships`);
		return retorno;
	}

}