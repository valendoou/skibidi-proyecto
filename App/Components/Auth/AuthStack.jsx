import AuthScreen from "./AuthScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AuthStack = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth">
        {() => (
          <AuthScreen
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthStack;