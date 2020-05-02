import React from 'react'
import {View, Text, CheckBox} from 'react-native'

export default class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: true,
        };
      }

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <CheckBox
                    title="Checkckbox"
                    style={{flex: 1, padding: 10}}
                    checked={this.state.isChecked}
                    onChange={this.toggleChange}
                />
            </View>
        )
    }
}