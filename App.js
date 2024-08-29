import React, { useState } from 'react'
import { View, Button, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen'; //Pantalla login
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen onLogin={() => setCurrentScreen('Home')} />;
      case 'Home':
        return <HomeScreen />;
      default:
        return <Text>Pantalla no encontrada</Text>;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
}