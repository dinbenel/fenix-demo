import {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {pokemonListStr} from '../../../constants/stringsRes';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {useAppSelector} from '../../../hooks/useAppSelector';
import Spacer from '../../../shared/Spacer/Spacer';
import PokeBallSvg from '../../../shared/Svg/PokeballSvg';
import {getPokemon} from '../../../store/thunk/pokemonThunk';
import PokemonCard from './PokemonCard';
import PokemonEmptyList from './PokemonEmptyList';

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
