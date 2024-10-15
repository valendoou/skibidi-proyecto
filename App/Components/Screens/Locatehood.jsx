/*import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [selectedBarrio, setSelectedBarrio] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchText, setSearchText] = useState(''); // Estado para el texto de búsqueda

  const barrios = ['Barrio A', 'Barrio B', 'Barrio C', 'Barrio D']; // Lista de barrios

  const handleBarrioPress = (barrio) => {
    if (selectedBarrio === barrio) {
      setSelectedBarrio(null);
    } else {
      setSelectedBarrio(barrio);
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const filteredBarrios = barrios.filter(barrio =>
    barrio.toLowerCase().includes(searchText.toLowerCase())
  ); // Filtrar barrios según el texto de búsqueda

  return (
    <View style={styles.container}>
      {/* Menú lateral }
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.menuToggle} onPress={toggleMenu}>
          <Text style={styles.menuText}>Menu</Text>
        </TouchableOpacity>

        {menuVisible && (
          <>
            <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Has seleccionado: Item 1')}>
              <Text style={styles.menuText}>Item 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Has seleccionado: Item 2')}>
              <Text style={styles.menuText}>Item 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Has seleccionado: Item 3')}>
              <Text style={styles.menuText}>Item 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Has seleccionado: Item 4')}>
              <Text style={styles.menuText}>Item 4</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Área principal }
      <View style={styles.mainContent}>
        {/* Buscador }
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscador"
            placeholderTextColor="#FFD700"
            value={searchText}
            onChangeText={setSearchText} // Actualizar el estado del texto de búsqueda
          />
        </View>

        {/* Bloques de barrios filtrados }
        {filteredBarrios.map((barrio) => (
          <TouchableOpacity key={barrio} style={styles.barrio} onPress={() => handleBarrioPress(barrio)}>
            <Text style={styles.barrioName}>{barrio}</Text>
            {selectedBarrio === barrio && (
              <View style={styles.statsSection}>
                <Text style={styles.stats}>Estadísticas de {barrio}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // División en barra lateral y contenido
  },
  sidebar: {
    width: '25%', // Ancho de la barra lateral
    backgroundColor: '#000', // Fondo oscuro para la barra lateral
    padding: 20,
  },
  menuToggle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#333', // Fondo del botón de toggle
    borderRadius: 5,
    marginBottom: 20,
  },
  menuText: {
    color: '#FFD700', // Color del texto (dorado)
    fontSize: 16,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#333', // Fondo de los ítems del menú
    borderRadius: 5,
    marginBottom: 15,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#333', // Fondo
    padding: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#FFD700', // Borde dorado
    padding: 10,
    borderRadius: 5,
    color: '#FFD700', // Texto dorado
  },
  barrio: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#444', // Fondo más oscuro para los barrios
    borderRadius: 5,
  },
  barrioName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', // Texto dorado
  },
  statsSection: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#555', // Fondo para las estadísticas
    borderRadius: 5,
  },
  stats: {
    fontSize: 16,
    color: '#FFD700', // Texto de estadísticas dorado
  },
});

export default App;*/
