import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';
export default function Home({ navigation }) {

  const [puzzles, setPuzzles] = useState([
    {id: 1, fen: "FEN", solution: "Ke2", description: "Mate in 1"},
    {id: 2, fen: "FEN", solution: "Qe2", description: "Mate in 2"},
    {id: 3, fen: "FEN", solution: "Nf3", description: "Mate in 3"},
  ])
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Daily Puzzles</Text>
        <FlatList
          data={puzzles}
          keyExtractor={(item) => item.id}
          renderItem= {({item}) => (
                <TouchableOpacity onPress={() => {navigation.navigate('Puzzle', item)}}>
                  <Text>Puzzle {item.id}</Text>
                </TouchableOpacity>
          )}
        />
    </View>
  );
}
