import React from 'react'
import {ScrollView, StyleSheet, View, Text, TextInput, Image} from 'react-native'
import SettingsScreenEncabezados from '../SettingsScreenEncabezados'
import {CamposTutiFrutti} from './CamposTutiFrutti'

const styles = StyleSheet.create({
    container: {        
        marginBottom: 75,
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
        borderBottomWidth: 1,
        borderBottomColor: 'green',
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
            minutes: 5,
            seconds: 0,
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
                    <CamposTutiFrutti 
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                </ScrollView>
            </View>
        )
    }
}
    