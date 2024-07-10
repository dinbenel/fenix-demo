import {createAsyncThunk} from '@reduxjs/toolkit';
import {pokemonThunkPaths} from '../../constants/thunkPaths';
import {fetchPokemon} from '../../api/pokemonApi';
import {IPokemon} from '../../types/pokemon.type';

export const getPokemon = createAsyncThunk(
  pokemonThunkPaths.getAll,
  async () => {
    try {
      const res = await fetchPokemon();
      return res.map(
        ({data}) =>
          ({
            abilities: data.abilities,
            height: data.height,
            id: data.id,
            moves: data.moves,
            name: data.name,
            order: data.order,
            species: data.species,
            sprites: data.sprites,
            stats: data.stats,
            types: data.types,
            weight: data.weight,
          } as IPokemon),
      );
    } catch (error) {
      return error;
    }
  },
);
