import {pokeApi} from '../constants/apiRouteNames';
import {axiosClient} from '../lib/httpClient';
import {IPokemon, IpokemonApiRes} from '../types/pokemon.type';

export const fetchPokemon = async () => {
  const {data} = await axiosClient.get<IpokemonApiRes>(pokeApi.getPokemon);
  const pokesPrm = [];
  for (let poke of data.results) {
    pokesPrm.push(axiosClient.get<IPokemon>(poke.url));
  }
  const res = await Promise.all(pokesPrm);
  return res;
};
