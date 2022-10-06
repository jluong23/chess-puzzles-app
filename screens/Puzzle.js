import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
export default function Puzzle({ route, navigation }) {
  // get props by 'route.params'
  const {description, fen, solution} = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{fen}</Text>
      <Text style={globalStyles.titleText}>{description}</Text>
      <Text style={globalStyles.titleText}>{solution}</Text>
    </View>
  );
}
