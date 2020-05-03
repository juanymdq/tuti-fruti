import * as React from 'react'
import {View, Button} from 'react-native'

const GoEncabezados = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Ir a Config Encabezados"
          onPress={() => navigation.navigate('ConfigEncabezados')}
        />
      </View>
    );
  }

export default class SettingsScreenConfigGeneral extends React.Component { 

    render() {
        return (
            <GoEncabezados navigation={this.props.navigation}/>
        )
    }
}