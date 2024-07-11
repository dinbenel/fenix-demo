import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Deploy} from '../screens/Deploy';
import Login from '../screens/login/Login';
import Pokemon from '../screens/Pokemon/Pokemon';
import DeploymentSvg from '../shared/Svg/DeploymentSvg';
import PokeBallSvg from '../shared/Svg/PokeballSvg';
import {TabsStackParamList} from '../types/navigation.type';
import UserSvg from '../shared/Svg/UserSvg';

const Tabs = createBottomTabNavigator<TabsStackParamList>();

const TabNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Login"
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Deploy') {
            return <DeploymentSvg />;
          } else if (route.name === 'Pokemon') {
            return <PokeBallSvg height="25px" width="25px" />;
          } else {
            return <UserSvg height="25px" width="25px" />;
          }
        },
        tabBarActiveTintColor: '#ef4444',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tabs.Screen name="Pokemon" component={Pokemon} />
      <Tabs.Screen name="Deploy" component={Deploy} />
      <Tabs.Screen name="Login" component={Login} />
    </Tabs.Navigator>
  );
};

export default TabNavigation;
