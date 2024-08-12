// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Loading from './loading';
import Register from '../Register/register';
import RegisterEmail from '../Register/email';
import RegisterVerify from '../Register/verify';
import LoadingStart from './loadingStart';

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function LoadingApp() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'Load'
          component = { LoadingStart }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name = 'Loading'
          component = { Loading }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name = 'Register'
          component = { Register }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name = 'Email'
          component = { RegisterEmail }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name = 'Verify'
          component = { RegisterVerify }
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name = 'VerifyComplete'
          component = { YourComponent }
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
  
  export default LoadingApp;