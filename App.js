import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './SRC/Login/Login';
import SignUp from './SRC/Login/SignUp';
import HomePage from './SRC/Home/HomePage';
import Clinic from './SRC/Home/Clinic';
import Food from './SRC/Home/Food';
import Medic from './SRC/Home/Medic';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Clinic" component={Clinic} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Medic" component={Medic} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
