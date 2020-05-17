import React from 'react'
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'

import CamposTutiFrutti from './CamposTutiFrutti'

const styles = StyleSheet.create({
    container: {        
        marginBottom: 120,
    },
    textTitulo: {
        alignSelf: 'center',       
    },    
    countdown: {
        marginTop: 5,       
        alignSelf: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: 'green',
    },
    boton: {
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:190,
        height:40,
        borderRadius:6,
        backgroundColor:'#5F8F62',       
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
                        nombre='Nombres'
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                    <CamposTutiFrutti 
                        nombre='Colores'
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                    <CamposTutiFrutti 
                        nombre='Países'
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                    <CamposTutiFrutti 
                        nombre='Marcas'
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                    <CamposTutiFrutti 
                        nombre='Películas'
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                    <CamposTutiFrutti 
                        nombre='Animales'
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                    <CamposTutiFrutti 
                        nombre='Frutas'
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                    <CamposTutiFrutti 
                        nombre='Actores'
                        letraRandom={this.state.letraRandom} 
                        isEditable={this.state.isEditable} 
                    />
                </ScrollView>
                <TouchableOpacity style={styles.boton} onPress={this.resetearLetras}>                
                    <Text>Basta para mí!!!</Text>            
                </TouchableOpacity>   
            </View>
        )
    }
}
    