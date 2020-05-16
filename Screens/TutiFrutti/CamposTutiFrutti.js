import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Text, Image } from 'react-native'

//import {words} from './Words'

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




export const CamposTutiFrutti = (props) => {    
    const [valueText, setValueText] = React.useState({
        valor: '',
    })
    
    const handleChangeInput = (event) => {
        //destructurin de los valores enviados por el metodo onchange de cada input     
        //setValueText(valueText= event.target)   
        //setValueText(prevState => ({
        //    ...prevState, valor: event.target }))
        //console.log('valor: ' + JSON.stringify(valueText))
        console.log(event)
    }


    const wList = props.words.map((word) => 
        <View style={styles.viewOpciones}>                        
            <View style={styles.viewPalabra}>
                <Text>{word.text}</Text>
                <TextInput  
                    key={word.id}  
                    name={word.text}                            
                    placeholder={`Ingrese un nombre con letra ${props.letraRandom}`}
                    onChangeText={handleChangeInput}                        
                    editable={props.isEditable}
                    
                   
                />                                             
            </View>           
            <View  style={styles.viewImagen}>
                {//valor != '' ?//&& word.id === this.state.valueId
                <Image 
                    key={word.id}
                    style={styles.tinyLogo} 
                    source={require('../imagenes/cancel.png')
                        //valor.charAt(0) != props.letraRandom
                        //? require('../imagenes/cancel.png')            
                        //: require('../imagenes/checked.png')
                    }
                />
                
                } 
            </View>
        </View>        
    )
    return wList
}



          


//---------------------------------------------------------------------
/*
render () {
    const wList = this.state.words.map((word) => 
        <View style={styles.viewOpciones}>                        
            <View style={styles.viewPalabra}>
                <Text>{word.text}</Text>
                <TextInput  
                    key={word.id}                              
                    placeholder={`Ingrese un nombre con letra ${this.props.letraRandom}`}
                    onChangeText={value => 
                        {
                            this.setState({valueText: value.toUpperCase()})
                            
                        }
                    }                                                             
                    editable={this.props.isEditable}
                />                                             
            </View>
            {console.log(word.id)}
            <View  style={styles.viewImagen}>
                {this.state.valueText != '' ?//&& word.id === this.state.valueId
                <Image 
                    key={word.id}
                    style={styles.tinyLogo} 
                    source={
                        this.state.valueText.charAt(0) != this.props.letraRandom
                        ? require('../imagenes/cancel.png')            
                        : require('../imagenes/checked.png')
                    }
                />
                : <Image />
                } 
            </View>
        </View>        
    )
    return wList
}*/