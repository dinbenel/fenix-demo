import {View, Text} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../../hooks/useAppSelector';

const LoginModalInfo = () => {
  const user = useAppSelector(state => state.user.user);
  return (
    <View>
      <Text>{user?.email}</Text>
      <Text>{user?.phone}</Text>
    </View>
  );
};

export default LoginModalInfo;
