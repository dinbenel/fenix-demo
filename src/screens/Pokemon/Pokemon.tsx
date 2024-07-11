import {View} from 'react-native';
import PokemonList from './components/PokemonList';

const Pokemon = () => {
  return (
    <View className="flex-1 bg-background">
      <PokemonList />
    </View>
  );
};

export default Pokemon;
