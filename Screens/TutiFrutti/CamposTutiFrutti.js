import React from 'react'
import { StyleSheet, View, TextInput, Text, Image } from 'react-native'
import { incrementCount } from '../../actions/index'
import { connect } from 'react-redux'

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

const mapStateToProps = (state) => {
    return {cont: state}
}

const mapDispatchToProps = dispatch => {
    return {incrementCount: () => dispatch(incrementCount())}
}

class CamposTutiFrutti extends React.Component {    
    
    constructor(props) {             
        super(props)
        this.state = {
            valueText: '',
            cont: 0,          
        }
    }

    setScore = () => {         
        this.props.incrementCount()         
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
                        onBlur={this.setScore}
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

const Campos = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CamposTutiFrutti);

export default Campos