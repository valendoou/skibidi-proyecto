import React, { useState, useEffect } from 'react';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './App/Components/Auth/AuthStack';


const firebaseConfig = {
  apiKey: "AIzaSyC-JFWealDeRH8vC1HiI_6WshshvQFlmQ4",
  authDomain: "skibidi-proyecto.firebaseapp.com",
  projectId: "skibidi-proyecto",
  storageBucket: "skibidi-proyecto.appspot.com",
  messagingSenderId: "687848885726",
  appId: "1:687848885726:web:eeb887fb26a006daa7a14f"
};

const app = initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        await signOut(auth);
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign-out error:', error.message);
    }
  };

  return (
    <NavigationContainer>
      {user ? (
        <AuthenticatedScreen handleSignOut={handleSignOut} />
      ) : (
        <AuthStack
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
    </NavigationContainer>
  );
};

export default App;