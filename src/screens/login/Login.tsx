import {View, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../../navigation/MainNavigation';
import LoginForm from './components/LoginForm';

const Login = () => {
  const nav = navigate();
  return (
    <View className="flex-1">
      <LoginForm />
    </View>
  );
};

export default Login;
