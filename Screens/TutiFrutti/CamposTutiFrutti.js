import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Text, Image } from 'react-native'

const styles = StyleSheet.create({    
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
    inputcolorBlue: {
        backgroundColor: '#5A9791'
    },
    inputcolorGreen: {
        backgroundColor: '#6E975A'
    },
    inputcolorRed: {
        backgroundColor: '#975A5F'
    },
    
})

export default class CamposTutiFrutti extends React.Component {    
    
    constructor(props) {
        super(props)
        this.state = {
            valueText: '',
        }
    }

    render() {
        return (            
            <View style={styles.viewOpciones}>                        
                <View style={styles.viewPalabra}>
                    <Text>{this.props.nombre}</Text>
                    <TextInput 
                        style={
                            this.state.valueText === ''
                            ? styles.inputcolorBlue
                            : (this.state.valueText.charAt(0) === this.props.letraRandom)
                            ? styles.inputcolorGreen
                            :styles.inputcolorRed
                        }                                            
                        placeholder={`Ingrese ${this.props.nombre} con letra ${this.props.letraRandom}`}
                        onChangeText={value => this.setState({valueText: value})}
                        editable={this.props.isEditable}
                    />                                             
                </View>           
                <View  style={styles.viewImagen}>  
                    {this.state.valueText != ''             
                    ? <Image                     
                        style={styles.tinyLogo} 
                        source={
                            this.state.valueText.charAt(0) != this.props.letraRandom
                            ? require('../imagenes/cancel.png')            
                            : require('../imagenes/checked.png')
                        }
                        />
                    : <Image/>
                    }
                </View>
            </View> 
              
        )
    }
   
}

