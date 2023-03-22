import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemoInfo=async(nameOrID:string)=>{

    const {data} = await pokeApi.get<Pokemon>(`pokemon/${nameOrID}`);
    return{
      id:      data.id,
      name:    data.name,
      sprites: data.sprites
  
    }
   
}