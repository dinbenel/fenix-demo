import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import {RootStackParamList} from '../types/navigation.type';
import {SafeAreaView} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1">
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export const navigate = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export default MainNavigation;
