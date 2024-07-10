import {View} from 'react-native';
import PokemonList from './components/PokemonList';
import PokeBallSvg from '../../shared/Svg/PokeballSvg';

const Home = () => {
  return (
    <View className="flex-1 p-2 bg-background">
      <PokemonList />
    </View>
  );
};

export default Home;
