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

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f0f0f0',
    },
    authContainer: {
      width: '80%',
      maxWidth: 400,
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      elevation: 3,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
      borderRadius: 4,
    },
    buttonContainer: {
      marginBottom: 16,
    },
    toggleText: {
      color: '#3498db',
      textAlign: 'center',
    },
    bottomContainer: {
      marginTop: 20,
    },
    emailText: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
    },
  }); 