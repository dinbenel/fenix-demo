import {View} from 'react-native';
import PokemonList from './components/pokemonList';

const Home = () => {
  return (
    <View className="bg-red-400">
      <PokemonList />
    </View>
  );
};

export default Home;
