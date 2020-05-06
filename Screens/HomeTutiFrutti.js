import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PlayTutiFrutti from './TutiFrutti/PlayTutiFrutti'
import GenerarLetra from './TutiFrutti/GenerarLetra'

function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <GoToButton screenName="Generar" />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Generar" component={GenerarLetra} />
        <Stack.Screen name="Play" component={PlayTutiFrutti} />
      </Stack.Navigator>
    
  );
}

export default App;