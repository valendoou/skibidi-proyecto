import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import ProfileScreen from "../../Screens/perfilescreen";
import InfoScreen from "../../Screens/helpscreen";


const Drawer = createDrawerNavigator();
const AuthenticatedScreen = ({ handleSignOut }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Perfiles" component={ProfileScreen} />
      <Drawer.Screen name="Informacion" component={InfoScreen} />      
    </Drawer.Navigator>
  );
};

export default AuthenticatedScreen;