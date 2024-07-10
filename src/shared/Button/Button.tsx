import {FC, ReactNode} from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';

type Props = {
  styles?: string;
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
};

const Button: FC<Props> = ({children, styles, onPress}) => {
  return (
    <TouchableOpacity className={` ${styles}`} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
