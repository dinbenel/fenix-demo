import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {IPokemon} from '../../../types/pokemon.type';

type Props = {
  pokemon: IPokemon;
};

const PokemonCard: FC<Props> = ({pokemon}) => {
  return (
    <View className="bg-white rounded-lg shadow-md p-2 overflow-hidden items-center w-40">
      <Image
        className="w-full h-40"
        source={{uri: pokemon.sprites.front_default}}
      />
      <Text className="px-4 pt-2 text-base font-medium capitalize border-t-[1px] border-gray-300 w-full text-center">
        {pokemon.name}
      </Text>
    </View>
  );
};

export default PokemonCard;
