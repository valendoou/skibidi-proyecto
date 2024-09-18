import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
//import { WebView } from 'react-native-webview';

export default function Map() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' ? (
        // Si está en la web, renderiza un WebView con un mapa de Leaflet o Google Maps.
        <WebView
          originWhitelist={['*']}
          source={{
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
                  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
                  <style> #map { height: 100vh; } </style>
                </head>
                <body>
                  <div id="map"></div>
                  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
                  <script>
                    var map = L.map('map').setView([51.505, -0.09], 13);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                      attribution: '© OpenStreetMap contributors'
                    }).addTo(map);
                  </script>
                </body>
              </html>
            `
          }}
          style={styles.map}
        />
      ) : (
        // Si está en iOS o Android, renderiza un MapView de react-native-maps.
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});