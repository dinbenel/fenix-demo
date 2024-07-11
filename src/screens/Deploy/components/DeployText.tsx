import {FC, ReactNode} from 'react';
import {View, Text} from 'react-native';

type Props = {
  children: ReactNode;
  type: 'title' | 'content';
};

const DeployText: FC<Props> = ({children, type}) => {
  const styles: Record<typeof type, string> = {
    content: 'mb-2 text-base font-normal',
    title: 'text-xl font-bold',
  };

  return <Text className={`text-foreground ${styles[type]}`}>{children}</Text>;
};

export default DeployText;
