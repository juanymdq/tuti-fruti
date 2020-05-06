import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/HomeScreen'
import HomeTutiFrutti from './Screens/HomeTutiFrutti'
import SettingsScreen from './Screens/SettingsScreen'
import HelpScreen from './Screens/HelpScreen'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            }  else if (route.name === 'HomeTutiFrutti') {
                iconName = focused ? 'ios-medal' : 'ios-medal';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-construct' : 'ios-construct';
            } else if (route.name === 'Help') {
              iconName = focused ? 'ios-help-circle' : 'ios-help-circle';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="HomeTutiFrutti" component={HomeTutiFrutti} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
