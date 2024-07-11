import {View, Text, GestureResponderEvent} from 'react-native';
import React, {FC} from 'react';
import {useAppSelector} from '../../../hooks/useAppSelector';
import Button from '../../../shared/Button/Button';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

const LoginModal: FC<Props> = ({onPress}) => {
  const user = useAppSelector(state => state.user.user);
  return (
    <View className="flex-1 bg-background/50 items-center gap-2 pt-4">
      <Button onPress={onPress} styles="bg-background px-4 py-2 rounded-md">
        <Text className="text-lg text-foreground capitalize ">close</Text>
      </Button>
      <Text className="text-lg text-foreground">welcome back</Text>
      <Text className="text-lg text-foreground">{user?.email}</Text>
      <Text className="text-lg text-foreground">{user?.phone}</Text>
    </View>
  );
};

export default LoginModal;
