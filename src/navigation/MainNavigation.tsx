import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import {RootStackParamList} from '../types/navigation.type';
import TabNavigation from './TabNavigation';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1">
        <TabNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export const navigate = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export default MainNavigation;
