import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HelpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* Barra lateral */}
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>GOTHAM SECURITY</Text>

        {/* Botón Mapa */}
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => navigation.navigate('Mapa')} // Navegar a Mapa
        >
          <Text style={styles.sidebarItemText}>Mapa</Text>
        </TouchableOpacity>

        {/* Botón Ayuda */}
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => navigation.navigate('Ayuda')} // Navegar a Ayuda
        >
          <Text style={styles.sidebarItemText}>Ayuda</Text>
        </TouchableOpacity>

        {/* Botón Yo */}
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => navigation.navigate('Yo')} // Navegar a Yo
        >
          <Text style={styles.sidebarItemText}>Yo</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido principal */}
      <ScrollView style={styles.mainContent}>
        <View style={styles.infoSection}>
          <Text style={styles.title}>¿Cómo usar la aplicación?</Text>
          <Text style={styles.text}>
            Cuando te enfrentas a una situación en la que tu seguridad está comprometida como un intento de robo, acoso, agresión o cualquier otra amenaza , simplemente presiona el botón de pánico. Al hacerlo, la aplicación:
            Envía una alerta instantánea a la policía local: La aplicación está conectada directamente con los servicios de emergencia, enviando una señal de alerta con tu ubicación en tiempo real. Esto asegura que las autoridades sepan exactamente dónde te encuentras y puedan intervenir de inmediato.
          </Text>

          <Text style={styles.title}>¿Para qué sirve la aplicación?</Text>
          <Text style={styles.text}>
            Gotham Security es una aplicación diseñada para mejorar la seguridad ciudadana en barrios peligrosos mediante un sistema de semáforo y reportes de actividad criminal. Los ciudadanos pueden reportar crímenes y estos reportes son categorizados por la policía de acuerdo con el código procesal penal.
          </Text>

          <Text style={styles.title}>Creadores:</Text>
          <Text style={styles.text}>
            Esta aplicación fue desarrollada por el equipo de Skibidi App, el cual está conformado por: Santiago Lencina, Valentino Nervi, Mateo Quintana y Lucas Herrera.  
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Barra lateral y contenido en columnas
    backgroundColor: '#333',
  },
  
  // Estilos para la barra lateral
  sidebar: {
    width: '15%', // Ocupa el 25% del ancho de la pantalla
    backgroundColor: '#000',
    padding: 20,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  sidebarItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#222',
    borderRadius: 5,
  },
  sidebarItemText: {
    fontSize: 16,
    color: '#FFF',
  },

  // Estilos para el contenido principal
  mainContent: {
    flex: 1,
    backgroundColor: '#333',
    padding: 10,
  },
  
  // Estilos para la sección de información
  infoSection: {
    padding: 20,
    backgroundColor: '#444',
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
});