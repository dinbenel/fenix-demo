import {View, Text} from 'react-native';
import Button from '../Button/Button';
import {navigate} from '../../navigation/MainNavigation';
import BackArrowSvg from '../Svg/BackArrowSvg';
import {useRoute} from '@react-navigation/native';
import Spacer from '../Spacer/Spacer';

const AppHeader = () => {
  const nav = navigate();
  const {name} = useRoute();
  const onBack = () => nav.goBack();

  return (
    <View className="bg-background relative p-4 border border-b-foreground/50 flex-row items-center justify-center">
      <Button onPress={onBack} styles="absolute left-4">
        <BackArrowSvg height="40px" width="40px" />
      </Button>

      <Text className="text-foreground text-2xl">{name}</Text>
    </View>
  );
};

export default AppHeader;
