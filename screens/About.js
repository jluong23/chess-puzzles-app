import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';
export default function About({navigation}) {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>About Screen!</Text>
        <View style={globalStyles.button}>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    </View>
  );
}
