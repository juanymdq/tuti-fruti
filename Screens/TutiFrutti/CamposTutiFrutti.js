import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Text, Image } from 'react-native'

import {words} from './Words'

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
    
    const [wordsState] = useState(words)

    const viewImagen = (event) => {
        console.log(event)
        if(event != props.letraRandom){
            <Image
                style={styles.tinyLogo}
                source={require('../imagenes/cancel.png')}
            />
        }else{ 
            <Image
                style={styles.tinyLogo}
                source={require('../imagenes/checked.png')}
            />                 
        }        
    }

    const wordList = wordsState.map((word) =>                                       
        <View style={styles.viewPalabra}>
            <Text>{word.text}</Text>
            <TextInput  
                key={word.id}  
                name={word.text}                            
                placeholder={`Ingrese un/a ${word.text} con letra ${props.letraRandom}`}
                onChangeText={viewImagen}                        
                editable={props.isEditable}
            />                                             
        </View>                      
              
    )
    return (
        <View>
            {wordList}
            {viewImagen}
        </View> 
    )
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