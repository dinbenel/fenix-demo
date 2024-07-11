import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Deploy} from '../screens/Deploy';
import Pokemon from '../screens/Pokemon/Pokemon';
import {TabsStackParamList} from '../types/navigation.type';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PokeBallSvg from '../shared/Svg/PokeballSvg';
import DeploymentSvg from '../shared/Svg/DeploymentSvg';

const Tabs = createBottomTabNavigator<TabsStackParamList>();

const TabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Deploy') {
            return <DeploymentSvg />;
          } else if (route.name === 'Pokemon') {
            return <PokeBallSvg height="25px" width="25px" />;
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: '#ef4444',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tabs.Screen name="Pokemon" component={Pokemon} />
      <Tabs.Screen name="Deploy" component={Deploy} />
    </Tabs.Navigator>
  );
};

export default TabNavigation;
