import React from 'react';
import {Alert, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import SettingsScreen from './Screens/SettingsScreen'
import HelpScreen from './Screens/HelpScreen'
import TutiFrutiScreen from './Screens/TutiFrutiScreen'
import {Ionicons} from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

TutiFrutiScreen.navigationOptions = {
  tabBarIcon: ({ tintColor}) => (
    <Ionicons
      name= {'ios-contacts'}
      size={25}
      color={tintColor}
    />
  )
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tuti Frutti" component={TutiFrutiScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Help" component={HelpScreen} />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {  
  render() {
    return (      
        <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      
    );
  }
}
