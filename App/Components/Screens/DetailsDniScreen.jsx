// Importa los módulos necesarios
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Pantalla para mostrar los detalles del ciudadano
const DetailsScreen = ({ route }) => {
  const { dni, usuario, clave } = route.params;
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch(
          `https://sisa.msal.gov.ar/sisa/services/rest/cmdb/obtener?nrodoc=${dni}&usuario=${usuario}&clave=${clave}`
        );

        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();
        
        if (data.resultado === 'OK') {
          setResultado(data);
        } else {
          setError('Persona no encontrada o error en los datos');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    obtenerDatos();
  }, [dni, usuario, clave]);

  return (
    <View style={stylesProfiles.detailsContainer}>
      {resultado ? (
        <>
          <View style={stylesProfiles.imageContainer}>
            {/* Aquí puedes agregar una imagen del ciudadano si la tienes */}
            <Text style={stylesProfiles.value}>
              {`Nombre: ${resultado.nombre} ${resultado.apellido}\nDNI: ${resultado.nroDocumento}`}
            </Text>
          </View>
          <Text style={stylesProfiles.label}>Detalles:</Text>
          <Text style={stylesProfiles.value}>
            {`Provincia: ${resultado.provincia}\nLocalidad: ${resultado.localidad}\nDomicilio: ${resultado.domicilio}`}
          </Text>
        </>
      ) : (
        <Text style={stylesProfiles.error}>{error}</Text>
      )}
    </View>
  );
};

// Exporta la pantalla
export default DetailsDniScreen;
