import {View, Text, FlatList} from 'react-native';
import {IPokemon} from '../../../types/pokemon.type';
import {FC, useEffect} from 'react';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {getPokemon} from '../../../store/thunk/pokemonThunk';
import {useAppSelector} from '../../../hooks/useAppSelector';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';
import PokemonCard from './PokemonCard';
import PokeBallSvg from '../../../shared/Svg/PokeballSvg';
import Spacer from '../../../shared/Spacer/Spacer';
import PokemonEmptyList from './PokemonEmptyList';
import {pokemonListStr} from '../../../constants/stringsRes';

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(state => state.pokemon.pokemon);
  const isLoading = useAppSelector(state => state.pokemon.isLoading);

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  return (
    <View className="items-center">
      <Spacer />
      <PokeBallSvg />
      <Spacer />
      <Text className="text-foreground capitalize text-3xl">
        {pokemonListStr.title}
      </Text>
      <Text className="text-foreground text-xl font-light">
        {pokemonListStr.subTitle}
      </Text>
      <Spacer />
      <FlatList
        ListEmptyComponent={<PokemonEmptyList isLoading={isLoading} />}
        horizontal={true}
        data={pokemon}
        keyExtractor={item => `${item.id}-${item.order}`}
        renderItem={({item}) => {
          return <PokemonCard pokemon={item} />;
        }}
        ItemSeparatorComponent={() => <View className="w-2" />}
      />
    </View>
  );
};

export default PokemonList;
