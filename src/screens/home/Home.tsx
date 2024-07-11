import {View} from 'react-native';
import PokemonList from './components/PokemonList';
import {Deploy} from '../Deploy';

const Home = () => {
  return (
    <View className="flex-1 p-2 bg-background">
      {/* <PokemonList /> */}
      <Deploy />
    </View>
  );
};

export default Home;
