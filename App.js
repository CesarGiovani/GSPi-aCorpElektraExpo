import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Conteiner/Search'
import Producto from './Conteiner/Producto'
export default function App() {
  return (
    <View style={styles.container}>
      <Search/>
      <Producto/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
