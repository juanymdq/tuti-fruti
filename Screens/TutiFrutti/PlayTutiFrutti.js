import React from 'react'
import {ScrollView, StyleSheet, View, Text, TextInput, Image} from 'react-native'
import SettingsScreenEncabezados from '../SettingsScreenEncabezados'

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
    },
    textTitulo: {
        alignSelf: 'center',       
    },
    viewOpciones: {
       flexDirection: 'row',
    },
    viewPalabra: {
        marginTop: 20,
        borderWidth: 1,
        width: 250,        
    },
    viewImagen: {        
        marginTop: 25,
        marginLeft: 30,
        width: 30,
        height: 40,
    },
    textOpciones: {

    },
    tinyLogo: {
        width: 40,
        height: 40,
    },
    countdown: {
        marginTop: 10,       
        alignSelf: 'center',         
    },
})



export default class PlayTutiFrutti extends React.Component {

    constructor(props) {
        super(props) 
        console.log(props)       
        this.state = {
            letraRandom: null,  
            isEditable: true,          
            nombre: '',
            pais: '',
            minutes: 0,
            seconds: 5,
        }
    }

    componentDidMount() {
        this.setState({letraRandom: this.props.route.params.letra})

        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                    this.setState({isEditable: false})
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }
   
    render() { 
        const { minutes, seconds } = this.state       
        return (
            <View style={styles.container}>
                <View style={styles.textTitulo}>
                    <Text style={{fontSize: 26, color: 'grey', textDecorationLine: 'underline'}}>
                        Vamos a jugar con la letra: {this.state.letraRandom}
                    </Text>
                </View>
                <View style={styles.countdown}>
                    <Text>
                        { minutes === 0 && seconds === 0
                            ? <Text style={{color: 'red', fontSize: 20}}>Tiempo agotado!!!!</Text>
                            : <Text style={{color: 'green', fontSize: 20}}>Tiempo restante: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>
                        }
                    </Text>
                </View>
                <ScrollView>
                    <View style={styles.viewOpciones}>
                        <View style={styles.viewPalabra}>
                            <Text>Nombres</Text>
                            <TextInput                                
                                placeholder={`Ingrese un nombre con letra ${this.state.letraRandom}`}
                                onChangeText={value => this.setState({nombre: value.toUpperCase()})}                                
                                editable={this.state.isEditable}
                            />                            
                        </View>
                        <View style={styles.viewImagen}>
                            { this.state.nombre != '' ?
                            <Image 
                                style={styles.tinyLogo} 
                                source={
                                    this.state.nombre.charAt(0) != this.state.letraRandom
                                    ? require('../imagenes/cancel.png')
                                    : require('../imagenes/checked.png')                                    
                                }
                            />
                            : <Image />
                            } 
                        </View>
                    </View>
                    <View style={styles.viewOpciones}>
                        <View style={styles.viewPalabra}>
                            <Text>Paises</Text>
                            <TextInput 
                                placeholder={`Ingrese un país con letra ${this.state.letraRandom}`}
                                onChangeText={value => this.setState({pais: value.trim()})}                                
                                editable={this.state.isEditable}
                            />                            
                        </View>
                        <View style={styles.viewImagen}>
                        { this.state.pais != '' ?
                            <Image 
                                style={styles.tinyLogo} 
                                source={
                                    this.state.pais.charAt(0) != this.state.letraRandom
                                    ? require('../imagenes/cancel.png')
                                    : require('../imagenes/checked.png')                                    
                                }
                            />
                            : <Image />
                            } 
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
    