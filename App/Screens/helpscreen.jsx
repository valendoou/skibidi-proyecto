import React from 'react';
import { View, Text, stylesInfoheet, ScrollView } from 'react-native';

export default function InfoScreen() {
  return (
    <ScrollView style={stylesInfo.container}>
      {/* Información de la Aplicación */}
      <View style={stylesInfo.infoSection}>
        <Text style={stylesInfo.title}>¿Cómo usar la aplicación?</Text>
        <Text style={stylesInfo.text}>
        Cuando te enfrentas a una situación en la que tu seguridad está comprometida como un intento de robo, acoso, agresión o cualquier otra amenaza—, simplemente presiona el botón de pánico. Al hacerlo, la aplicación:
        Envía una alerta instantánea a la policía local: La aplicación está conectada directamente con los servicios de emergencia, enviando una señal de alerta con tu ubicación en tiempo real. Esto asegura que las autoridades sepan exactamente dónde te encuentras y puedan intervenir de inmediato.
        </Text>

        <Text style={stylesInfo.title}>¿Para qué sirve la aplicación?</Text>
        <Text style={stylesInfo.text}>
        Gotham Security es una aplicación diseñada para mejorar la seguridad ciudadana en barrios peligrosos mediante un sistema de semáforo y reportes de actividad criminal. Los ciudadanos pueden reportar crímenes y estos reportes son categorizados por la policía de acuerdo con el código procesal penal.
        </Text>

        <Text style={stylesInfo.title}>Creadores:</Text>
        <Text style={stylesInfo.text}>
          Esta aplicación fue desarrollada por el equipo de Skibidi App, El cual esta conformado por: Santiago Lencina, Valentino Nervi, Mateo Quintana y Lucas Herrera.  
        </Text>
      </View>
    </ScrollView>
  );
}

const stylesInfo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Fondo oscuro
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#444', // Fondo de la sección de texto
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', // Color dorado para los títulos
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFF', // Texto en blanco
    marginBottom: 10,
  },
});