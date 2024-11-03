import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const ProfileScreen = ({ route }) => {
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
    return <Text>Cargando...</Text>;
  }

  if (!profileData) {
    return <Text>No se encontró información para el DNI ingresado.</Text>;
  }

  return (
    <View style={stylesProfiles.detailsContainer}>
      <View style={stylesProfiles.imageContainer}>
        <Image
          style={stylesProfiles.image}
          source={{ uri: '' }} // Tenemos que ver como hacer para que cargue la imagen
        />
      </View>
      <Text style={stylesProfiles.label}>Nombre:</Text>
      <Text style={stylesProfiles.value}>{profileData.nombre}</Text>
      <Text style={stylesProfiles.label}>Apellido:</Text>
      <Text style={stylesProfiles.value}>{profileData.apellido}</Text>
      <Text style={stylesProfiles.label}>Fecha de Nacimiento:</Text>
      <Text style={stylesProfiles.value}>{profileData.fechaNacimiento}</Text>
      <Text style={stylesProfiles.label}>Cobertura Social:</Text>
      <Text style={stylesProfiles.value}>{profileData.cobertura?.nombreObraSocial || 'No disponible'}</Text>
    </View>
  );
};

const stylesProfiles = StyleSheet.create({
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
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 3,
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
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
});

export default DetailsDniScreen;
