import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// Pantalla para ingresar DNI
const EnterDniScreen = ({ navigation }) => {
  const [dni, setDni] = useState('');

  const handleNext = () => {
    navigation.navigate('Details', { dni, usuario, clave });
  };

  return (
    <View style={stylesProfiles.container}>
      <TextInput 
        style={stylesProfiles.input}
        placeholder="Número de DNI"
        value={dni}
        onChangeText={setDni}
        keyboardType="numeric"
      />
      <Button title="Enviar" onPress={handleNext} />
    </View>
  );
};

// Estilos para la pantalla
const stylesProfiles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

// Exporta la pantalla
export default EnterDniScreen;
