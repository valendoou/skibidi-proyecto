// Importa los módulos necesarios
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// Pantalla para ingresar DNI
const InputDniScreen = ({ navigation }) => {
  const [dni, setDni] = useState('');
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

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
      <TextInput 
        style={stylesProfiles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput 
        style={stylesProfiles.input}
        placeholder="Clave"
        value={clave}
        onChangeText={setClave}
        secureTextEntry
      />
      <Button title="Obtener Datos" onPress={handleNext} />
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
