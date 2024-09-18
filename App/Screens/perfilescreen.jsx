import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const ImagenPersona = require('../../assets/FotoEjemplo.jpg');

export default function App() {
  // Datos estáticos para la persona, aca estaria la api
  const [dniData] = useState({
    nombre: "Mateo",
    apellido: "Quintana",
    fechaNacimiento: "2006-05-13",
    sexo: "Masculino",
    numeroDocumento: "47.285.025",
    foto: "https://via.placeholder.com/300x200" // Foto de ejemplo
  });

  return (
    <View style={styles.container}>
      {/* Imagen y Documento de Identidad */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: dniData.foto }} // Foto de ejemplo
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Detalles del DNI */}
      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.label}>DNI</Text>
        <Text style={styles.label}>NOMBRE:</Text>
        <Text style={styles.value}>{dniData.nombre} {dniData.apellido}</Text>
        <Text style={styles.label}>FECHA DE NACIMIENTO:</Text>
        <Text style={styles.value}>{dniData.fechaNacimiento}</Text>
        <Text style={styles.label}>SEXO:</Text>
        <Text style={styles.value}>{dniData.sexo}</Text>
        <Text style={styles.label}>NÚMERO DE DOCUMENTO:</Text>
        <Text style={styles.value}>{dniData.numeroDocumento}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Color de fondo similar al diseño
    padding: 10,
  },
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
    backgroundColor: '#222', // Fondo para el cuadro de texto
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', // Color de texto similar (dorado)
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#fff', // Color de texto blanco
    marginBottom: 15,
  },
});