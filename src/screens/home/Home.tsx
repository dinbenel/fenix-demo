import {View, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../../navigation/MainNavigation';

const Home = () => {
  const nav = navigate();
  return (
    <View className="bg-red-400">
      <Text>Home</Text>
      <TouchableOpacity onPress={() => nav.navigate('Login')}>
        <Text>to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
