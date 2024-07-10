import {FC} from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native';

type Props = {
  label: string;
  error?: string;
  onChange: (text: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
};

const FormTextInput: FC<Props> = ({
  error = '',
  label,
  onChange,
  value,
  onBlur,
}) => {
  const errStyle = error ? 'border-destructive' : 'border-gray-300';
  return (
    <View className="flex flex-col gap-2">
      <Text className="capitalize font-medium text-base">{label}</Text>
      <View>
        <TextInput
          className={`border p-1 text-black/50 ${errStyle}`}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
        <Text className={`${error ? 'text-destructive' : ''}`}>{error}</Text>
      </View>
    </View>
  );
};

export default FormTextInput;
