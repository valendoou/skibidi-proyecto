import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const DetailsDniScreen = ({ route }) => {
  const { dni } = route.params;
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://sisa.msal.gov.ar/sisa/services/rest/cmdb/obtener?nrodoc=${dni}&usuario=&clave=`);
        setProfileData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dni]);

  if (loading) {
    return <Text style={styles.loadingText}>Cargando...</Text>;
  }

  if (!profileData) {
    return <Text style={styles.errorText}>No se encontró información para el DNI ingresado.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagen de Perfil */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: profileData.imagenUrl || '' }}
        />
      </View>

      {/* Datos Personales Básicos */}
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{profileData.nombre || 'No disponible'}</Text>
      <Text style={styles.label}>Apellido:</Text>
      <Text style={styles.value}>{profileData.apellido || 'No disponible'}</Text>
      <Text style={styles.label}>Fecha de Nacimiento:</Text>
      <Text style={styles.value}>{profileData.fechaNacimiento || 'No disponible'}</Text>
      <Text style={styles.label}>Sexo:</Text>
      <Text style={styles.value}>{profileData.sexo || 'No disponible'}</Text>
      <Text style={styles.label}>Nacionalidad:</Text>
      <Text style={styles.value}>{profileData.nacionalidad || 'No disponible'}</Text>

      {/* Datos Administrativos */}
      <Text style={styles.label}>Número de Trámite:</Text>
      <Text style={styles.value}>{profileData.numeroTramite || 'No disponible'}</Text>
      <Text style={styles.label}>Estado Civil:</Text>
      <Text style={styles.value}>{profileData.estadoCivil || 'No disponible'}</Text>
      <Text style={styles.label}>Domicilio:</Text>
      <Text style={styles.value}>{profileData.domicilio || 'No disponible'}</Text>

      {/* Información de Salud */}
      <Text style={styles.label}>Cobertura Social:</Text>
      <Text style={styles.value}>{profileData.cobertura?.nombreObraSocial || 'No disponible'}</Text>
      <Text style={styles.label}>Historial de Vacunación:</Text>
      <Text style={styles.value}>{profileData.historialVacunacion || 'No disponible'}</Text>
      <Text style={styles.label}>Datos Epidemiológicos:</Text>
      <Text style={styles.value}>{profileData.datosEpidemiologicos || 'No disponible'}</Text>
      <Text style={styles.label}>Discapacidad:</Text>
      <Text style={styles.value}>{profileData.certificadoDiscapacidad || 'No disponible'}</Text>

      {/* Datos Sociales */}
      <Text style={styles.label}>Beneficios Sociales:</Text>
      <Text style={styles.value}>{profileData.beneficiosSociales || 'No disponible'}</Text>
      <Text style={styles.label}>Condición Migratoria:</Text>
      <Text style={styles.value}>{profileData.condicionMigratoria || 'No disponible'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#222',
    borderRadius: 10,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
  },
  loadingText: {
    color: '#FFD700',
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default DetailsDniScreen;
