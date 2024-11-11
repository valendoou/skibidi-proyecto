// App.js
import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import AuthForm from './App/Components/Auth/AuthForm'; // Formulario de autenticación
import AuthenticatedScreen from './App/Components/Auth/AuthenticatedScreen'; // Navegación del usuario autenticado

// Configuración de Firebase (reemplaza con tu configuración)
const firebaseConfig = {
  apiKey: "AIzaSyC-JFWealDeRH8vC1HiI_6WshshvQFlmQ4",
  authDomain: "skibidi-proyecto.firebaseapp.com",
  projectId: "skibidi-proyecto",
  storageBucket: "skibidi-proyecto.firebasestorage.app",
  messagingSenderId: "687848885726",
  appId: "1:687848885726:web:eeb887fb26a006daa7a14f"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // Observa cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Actualiza el usuario al iniciar o cerrar sesión
    });
    return unsubscribe;
  }, []);

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        // Iniciar sesión
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert("Inicio de sesión exitoso");
      } else {
        // Registrarse
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert("Usuario creado exitosamente");
      }
    } catch (error) {
      console.error("Error en la autenticación:", error.message);
      Alert.alert("Error", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert("Sesión cerrada");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <AuthenticatedScreen handleLogout={handleLogout} /> // Muestra el menú con Drawer si el usuario está autenticado
      ) : (
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
