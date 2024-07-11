import {FC, ReactNode} from 'react';
import {Modal} from 'react-native';

type Props = {
  children: ReactNode;
  visible: boolean;
};

const AppModal: FC<Props> = ({children, visible: visible}) => {
  return (
    <Modal visible={visible} animationType="slide">
      {children}
    </Modal>
  );
};

export default AppModal;
