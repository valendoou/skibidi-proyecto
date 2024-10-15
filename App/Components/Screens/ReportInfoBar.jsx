import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function ReportInfoBar(props){
    return(
        <View style={styles.main}>
            <TouchableOpacity style={styles.container}>

                <View style={styles.picCont}>
                    <Image source={require('../assets/McLovin.jpg')} style={styles.profilePic}/>
                </View>

                <View style={styles.description}>
                    <View style={styles.circle}></View>
                    <Text>Lorem Iptum</Text>
                </View>

                <View style={styles.hour}>

                </View>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
        marginLeft: 55,
        marginTop: 10
    },

    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 150,
        width: 1200,
        backgroundColor: '#000000',
        borderRadius: 10,
    },

    picCont:{
        flex:1,
        justifyContent: "center",
        height:80, 
        width:80,
    },

    profilePic:{
        height:80, 
        width:80, 
        borderRadius:40, 
    },

    description:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#FFD700',
        borderRadius: 40,
    }

})