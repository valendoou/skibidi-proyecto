import 'react-native-gesture-handler';
import CustomDrawer from './CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screen/Home';
import OptionScreen from './Screen/Option';
import AboutScreen from './Screen/About';
import { NavigationContainer } from '@react-navigation/native';
import Fontisto from '@expo/vector-icons/Fontisto';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function AuthenticatedScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{
          headerStyle:{
            backgroundColor: '#000000'
          },
          headerTitleAlign: 'center',
          headerTintColor: '#FFD700',
          drawerLabelStyle: {marginLeft: -20, },
          drawerActiveBackgroundColor: '#FFD700',
          drawerActiveTintColor: '#000000',
          drawerInactiveBackgroundColor: '#fff441',
          drawerInactiveTintColor: '#424949' }}>
        <Drawer.Screen name="Map" component={HomeScreen} options={{
          drawerIcon: ({color}) => (
            <Fontisto name="map" size={24} color={color} />
          )
        }} />
        <Drawer.Screen name="Ayuda" component={OptionScreen} options={{
          drawerIcon: ({color}) => (
            <Octicons name="info" size={24} color={color} />
          )
        }} />
        <Drawer.Screen name="Perfil" component={AboutScreen} options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={24} color={color} />
          )
        }}/>
      </Drawer.Navigator> 
    </NavigationContainer>
  );
}

