import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";
import TaskScreen from "./screens/TaskScreen";
import AddTaskScreen from "./src/screens/AddTaskScreen";
import { NativeAppEventEmitter } from "react-native";

const Tab  = createBottomTabNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigatior
            
            >
            </Tab.Navigatior>
        </NavigationContainer>
    );
}