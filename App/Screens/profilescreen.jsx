import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const ImagenPersona = require('../../assets/FotoEjemplo.jpg');

export default function ProfileScreen() {
  // Datos estáticos para la persona, acá estaría la api
  const [dniData] = useState({
    nombre: "Mateo",
    apellido: "Quintana",
    fechaNacimiento: "2006-05-13",
    sexo: "Masculino",
    numeroDocumento: "47.285.025",
    foto: ImagenPersona // Foto de ejemplo
  });

  return (
    <View style={styles.container}>
      {/* Barra lateral */}
      <View style={styles.sidebar}>
        <Text style={styles.logoText}>GOTHAM SECURITY</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Yo</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido principal */}
      <View style={styles.mainContent}>
        {/* Imagen de Dni */}
        <View style={stylesProfiles.imageContainer}>
          <Image
            source={{ uri: dniData.foto }} // Foto de ejemplo
            style={stylesProfiles.image}
            resizeMode="contain"
          />
        </View>

        {/* Datos del DNI */}
        <ScrollView style={stylesProfiles.detailsContainer}>
          <Text style={stylesProfiles.label}>DNI</Text>
          <Text style={stylesProfiles.label}>NOMBRE:</Text>
          <Text style={stylesProfiles.value}>{dniData.nombre} {dniData.apellido}</Text>
          <Text style={stylesProfiles.label}>FECHA DE NACIMIENTO:</Text>
          <Text style={stylesProfiles.value}>{dniData.fechaNacimiento}</Text>
          <Text style={stylesProfiles.label}>SEXO:</Text>
          <Text style={stylesProfiles.value}>{dniData.sexo}</Text>
          <Text style={stylesProfiles.label}>NÚMERO DE DOCUMENTO:</Text>
          <Text style={stylesProfiles.value}>{dniData.numeroDocumento}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // División en barra lateral y contenido
  },
  sidebar: {
    width: '25%', // Ancho de la barra lateral
    backgroundColor: '#1a1a1a', // Fondo oscuro para la barra lateral
    padding: 20,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', // Color del texto (dorado)
    marginBottom: 40,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#333', // Fondo de los ítems del menú
    borderRadius: 5,
    marginBottom: 15,
  },
  menuText: {
    color: '#FFD700', // Color del texto (dorado)
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#333', // Fondo 
    padding: 20,
  }
});

const stylesProfiles = StyleSheet.create({
  imageContainer: {
    flex: 2,
    backgroundColor: '#444', // Fondo de la imagen
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 3,
    backgroundColor: '#222', // Fondo para el texto
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', // Color de texto dorado parecido al del boceto
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#fff', // Color de texto blanco
    marginBottom: 15,
  },
});