import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Player from './src/Screens/Player';
import AllMusic from './src/Screens/AllMusic';
import AllPlayList from './src/Screens/AllPlayList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="player" component={Player} options={{headerShown : false}}/>
        <Stack.Screen name="allmusic" component={AllMusic}  options={{headerShown : false}}/>
        <Stack.Screen  name="allplaylist" component={AllPlayList}  options={{headerShown : false}}/>
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
