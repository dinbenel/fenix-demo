import {FC} from 'react';
import {View, Text} from 'react-native';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';

type Props = {
  isLoading: boolean;
};

const PokemonEmptyList: FC<Props> = ({isLoading}) => {
  return (
    <View className="flex-1 justify-center items-center">
      {isLoading ? <LoadingSpinner /> : <Text>No Data Available</Text>}
    </View>
  );
};

export default PokemonEmptyList;
