import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function HomeScreen() {
    const [origin, setOrigin] = React.useState({
        latitude: -38.95163481696924,
        longitude: -68.05911670044216,
    });

    const [isReporting, setIsReporting] = React.useState(false); 
    const [reportLocation, setReportLocation] = React.useState(null); 

    
    const handleMapPress = (e) => {
        if (isReporting) { 
            const { coordinate } = e.nativeEvent;
            setReportLocation(coordinate); 
            setIsReporting(false); 
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                }}
                onPress={handleMapPress} 
            >
                {reportLocation && (
                    <Marker coordinate={reportLocation} />
                )}
            </MapView>

            <TouchableOpacity
                style={styles.reportButton}
                onPress={() => {
                    alert("Seleccione la ubicación del robo en el mapa");
                    setIsReporting(true); 
                }}
            >
                <Text style={styles.reportButtonText}>Reportar</Text>
            </TouchableOpacity>
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
    reportButton: {
        position: 'absolute',
        top: '90%',  
        left: '50%',  
        transform: [{ translateX: -75 }, { translateY: -25 }],  
        backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        elevation: 5, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    reportButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});