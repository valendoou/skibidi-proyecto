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