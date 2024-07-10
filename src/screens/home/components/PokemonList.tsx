import {View, Text, FlatList} from 'react-native';
import {IPokemon} from '../../../types/pokemon.type';
import {FC, useEffect} from 'react';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {getPokemon} from '../../../store/thunk/pokemonThunk';
import {useAppSelector} from '../../../hooks/useAppSelector';

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const {isLoading, pokemon} = useAppSelector(state => ({
    isLoading: state.pokemon.isLoading,
    pokemon: state.pokemon.pokemon,
  }));

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  if (isLoading) return <Text>Loading.....</Text>;

  return (
    <View>
      <Text>PokemonList</Text>
      <FlatList
        data={pokemon}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default PokemonList;
