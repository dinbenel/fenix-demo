import {createSlice} from '@reduxjs/toolkit';
import {IPokemon} from '../../types/pokemon.type';
import {appSliceNames} from '../../constants/appSliceNames';
import {getPokemon} from '../thunk/pokemonThunk';

interface UserState {
  pokemon: IPokemon[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  pokemon: [],
  error: '',
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: appSliceNames.pokemon,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPokemon.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemon = action.payload as IPokemon[];
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default pokemonSlice.reducer;
