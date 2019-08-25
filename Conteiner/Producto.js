import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TextInput, Button } from 'react-native';

export default function Producto() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const login = () => {
   console.log("Ok");
  }

  return (
    <View style={styles.container}>
      <Text h1>Colchones y muebles</Text>
      <Image
        source={{ uri: 'https://famsa_imagenes2.storage.googleapis.com/84581300SALA-KENT.jpg' }}
        style={{ width: 200, height: 200 }}     
      />
      <Text h1>Sala Viena esquinada Chocolate</Text>
      <Text h2>De: 19,649.00</Text>
      <Text h2>A: 11,699.00</Text>
      <Button 
      onPress={login}
      title="Agendar cita   "
      color="#841584"
      /> 
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});