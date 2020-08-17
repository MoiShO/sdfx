import { createStackNavigator } from '@react-navigation/stack';
import { Character } from '../dto/types/Character';

export type RootStackParamList = {
    Home: undefined;
    Details: Character;
  };

export const RootStack = createStackNavigator<RootStackParamList>();