import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

const styles = StyleSheet.create({
    imagen: {
        width: 350,
        height: 420,
    }
})

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={styles.imagen}
                    source={require('./imagenes/tutifruti.png')}
                />
            
            </View>
        )
    }
}