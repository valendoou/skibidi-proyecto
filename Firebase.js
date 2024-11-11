// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-JFWealDeRH8vC1HiI_6WshshvQFlmQ4",
  authDomain: "skibidi-proyecto.firebaseapp.com",
  projectId: "skibidi-proyecto",
  storageBucket: "skibidi-proyecto.appspot.com",
  messagingSenderId: "687848885726",
  appId: "1:687848885726:web:eeb887fb26a006daa7a14f"
};

// Inicializar Firebase solo si no ha sido inicializado
const app = initializeApp(firebaseConfig);

// Inicializar Auth con persistencia usando AsyncStorage
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {
  if (error.code === 'auth/already-initialized') {
    auth = getAuth(app); // Usa la instancia existente
  } else {
    console.error("Error initializing Firebase Auth:", error);
  }
}

export { auth, app };
