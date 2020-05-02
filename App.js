import React from 'react';
import {Alert, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SettingsScreen from './Screens/SettingsScreen'
import HelpScreen from './Screens/HelpScreen'
import TutiFrutiScreen from './Screens/TutiFrutiScreen'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tuti Frutti" component={TutiFrutiScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
    </Tab.Navigator>
  );
}

const A = 65 // código ASCII del carácter.
const newArray = []

export default class App extends React.Component {  
  render() {
    return (      
        <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      
    );
  }
}
