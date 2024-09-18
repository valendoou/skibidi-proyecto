import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
    return (
      <View style={styles.authContainer}>
         <Text style={styles.title}>{isLogin ? 'Iniciar Sesion' : 'Registrarse'}</Text>
  
         <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title={isLogin ? 'Acceder' : 'Registrarse'} onPress={handleAuthentication} color="#3498db" />
        </View>
  
        <View style={styles.bottomContainer}>
          <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
            {isLogin ? 'No tienes cuenta? Registrarse' : 'Ya tienes una cuenta? Acceder'}
          </Text>
        </View>
      </View>
    );
}

export default AuthScreen;

  