import {FC} from 'react';
import {View} from 'react-native';

type Props = {
  padding?: number;
};

const Spacer: FC<Props> = ({padding = 2}) => {
  return <View className={`p-${padding}`}></View>;
};

export default Spacer;
