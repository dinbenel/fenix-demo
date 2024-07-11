import {Platform} from 'react-native';
import DeployIos from './DeployIos';
import DeployAndroid from './DeployAndroid';

export const Deploy =
  Platform.select({
    ios: DeployIos,
    android: DeployAndroid,
  }) || (() => null);
