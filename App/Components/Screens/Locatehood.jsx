import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const App = () => {
  // Estado para manejar el barrio seleccionado
  const [selectedBarrio, setSelectedBarrio] = useState(null);
  
  // Estado para controlar si el menú lateral es visible
  const [menuVisible, setMenuVisible] = useState(false);
  
  // Estado para el texto de búsqueda
  const [searchText, setSearchText] = useState('');

  // Lista de barrios disponibles
  const barrios = ['Barrio A', 'Barrio B', 'Barrio C', 'Barrio D'];

  // Función para manejar la selección de un barrio
  const handleBarrioPress = (barrio) => {
    // Si el barrio ya está seleccionado, lo deselecciona
    setSelectedBarrio(selectedBarrio === barrio ? null : barrio);
  };

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Filtra los barrios según el texto de búsqueda
  const filteredBarrios = barrios.filter(barrio =>
    barrio.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Barra lateral */}
      <View style={styles.sidebar}>
        {/* Botón para abrir/cerrar el menú */}
        <TouchableOpacity style={styles.menuToggle} onPress={toggleMenu}>
          <Text style={styles.menuText}>Menu</Text>
        </TouchableOpacity>

        {/* Menú lateral que se muestra si `menuVisible` es verdadero */}
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

      {/* Área principal de contenido */}
      <View style={styles.mainContent}>
        {/* Barra de búsqueda */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscador"
            placeholderTextColor="#FFD700"
            value={searchText}                 // Texto de búsqueda actual
            onChangeText={setSearchText}        // Función para actualizar el texto de búsqueda
          />
        </View>

        {/* Lista de barrios filtrados según el texto de búsqueda */}
        {filteredBarrios.map((barrio) => (
          <TouchableOpacity key={barrio} style={styles.barrio} onPress={() => handleBarrioPress(barrio)}>
            <Text style={styles.barrioName}>{barrio}</Text>
            
            {/* Si el barrio está seleccionado, muestra estadísticas */}
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
    flex: 1,                              // Ocupa toda la pantalla
    flexDirection: 'row',                 // Divide la pantalla en fila (barra lateral y contenido)
  },
  sidebar: {
    width: '25%',                         // Ancho de la barra lateral
    backgroundColor: '#000',              // Fondo oscuro
    padding: 20,
  },
  menuToggle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#333',              // Fondo gris oscuro del botón
    borderRadius: 5,
    marginBottom: 20,
  },
  menuText: {
    color: '#FFD700',                     // Color dorado del texto
    fontSize: 16,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#333',              // Fondo gris oscuro de los ítems del menú
    borderRadius: 5,
    marginBottom: 15,
  },
  mainContent: {
    flex: 1,                              // Ocupa el espacio restante
    backgroundColor: '#333',              // Fondo gris oscuro
    padding: 20,
  },
  searchBar: {
    marginBottom: 20,                     // Separación inferior de la barra de búsqueda
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#FFD700',               // Borde dorado
    padding: 10,
    borderRadius: 5,
    color: '#FFD700',                     // Texto dorado
  },
  barrio: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#444',              // Fondo más oscuro para los barrios
    borderRadius: 5,
  },
  barrioName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',                     // Texto dorado para los nombres de barrios
  },
  statsSection: {
    marginTop: 10,                        // Espacio arriba de las estadísticas
    padding: 10,
    backgroundColor: '#555',              // Fondo de las estadísticas
    borderRadius: 5,
  },
  stats: {
    fontSize: 16,
    color: '#FFD700',                     // Texto dorado de las estadísticas
  },
});

export default App;
