import {createAsyncThunk} from '@reduxjs/toolkit';
import {pokemonThunkPaths} from '../../constants/thunkPaths';
import {fetchPokemon} from '../../api/pokemonApi';

export const getPokemon = createAsyncThunk(
  pokemonThunkPaths.getAll,
  async () => {
    try {
      const res = await fetchPokemon();
      return res.filter(r => r.status === 'fulfilled');
    } catch (error) {
      return error;
    }
  },
);
