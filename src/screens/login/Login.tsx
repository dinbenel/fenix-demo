import {View, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../../navigation/MainNavigation';

const Login = () => {
  const nav = navigate();
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => nav.navigate('Home')}>
        <Text>to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
