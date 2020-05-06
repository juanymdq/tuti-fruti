import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import SettingsScreenEncabezados from './SettingsScreenEncabezados'
import SettingsScreenConfigGeneral from './SettingsScreenConfigGeneral'

const Tab = createStackNavigator();

const TabsConfig = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Configuracion general" component={SettingsScreenConfigGeneral} />
     <Tab.Screen name="Configuracion Encabezados" component={SettingsScreenEncabezados} />
    </Tab.Navigator>
  );
}

export default class SettingsScreen extends React.Component {  
  render() {
    return (      
        <TabsConfig />      
    );
  }
}
