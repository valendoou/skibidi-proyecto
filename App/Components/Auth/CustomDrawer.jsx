import React from "react";
import { Image, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
    <View style={{flex:1, backgroundColor:'#000000',}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#000000'}}>
        <View style={{flex:1, flexDirection:"column", alignItems:"center"}}>s
        <Image source={require('../DrawerApp/assets/McLovin.jpg')} style={{height:80, width:80, borderRadius:40, marginBottom:10}}/>
        <Text style={{color:'#fff', fontSize:15, }}>Mclovin</Text>
        </View>
        <View style={{marginTop: 10}}>
        <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
    );
}

export default CustomDrawer;
