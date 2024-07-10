import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import pokemonReducer from './slices/pokemonSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    pokemon: pokemonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
