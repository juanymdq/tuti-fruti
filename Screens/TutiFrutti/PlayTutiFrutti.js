import React from 'react'
import {ScrollView, StyleSheet, View, Text, TextInput} from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
    },
    textTitulo: {
        fontSize: 26,
        color: 'red',
    },
})

export default class PlayTutiFrutti extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {        
        return (
            <View style={styles.container}>
                <Text style={styles.textTitulo}>
                    Vamos a jugar con la letra: {this.props.route.params.letra}
                </Text>
                <ScrollView>
                    <View></View>
                </ScrollView>
            </View>
        )
    }
}
    