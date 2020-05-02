import React from 'react';
import {Alert, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const A = 65 // código ASCII del carácter.
const newArray = []

export default class TutiFrutiScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i)),
      randomLetter: null,
      arrayLetrasGeneradas: [],
      arrayLetrasrestantes: [],
      count: 0,
    }
  }  
    // generate a random number between min and max
  rand = (max, min = 0) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  //Generar una letra aleatoria y actualiza el estado de randomLetter para renderizarlo
  handleClick = () => {
    if (this.state.count >= 26) {
      Alert.alert('ATENCION','Ya se han generado todas las letras, debe resetar para comenzar nuevamente')
    }else{
      const letra = this.state.letters[this.rand(this.state.letters.length - 1)]//genera la letra aleatoria
      //this.verificaLetrasEnArray(letter)
      this.setState({ randomLetter: letra })//actuliza la variable de estado randomLetter
      newArray.push(letra)//inserta en un nuevo array la letra generada
      const contar = this.state.count + 1//cuenta las letras que van saliendo
      this.setState({ count: contar})//actualiza la variable de estado count
      this.setState({ arrayLetrasGeneradas: newArray })//actualiza el array de estado   
      //en array result se opia el array de letras sin la letra generada aleatoriamente
      //es decir, "elimina" la letra del array letters
      const result = this.state.letters.filter(letter => letter != letra);
      //console.log(result)
      this.setState({letters: result})//actualiza el array de estado letters
    }
  }

  resetearLetras = () => {
    this.state.arrayLetrasGeneradas.length = 0
    this.setState({ arrayLetrasGeneradas: [] })
    this.setState({letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))})
    this.setState({ count: 0 })
    this.setState({ randomLetter: null })
  }

  render() {
    return (
      <View style={styles.cuerpo}>
        <View>
          <Text style={styles.titulo}>TUTI FRUTI</Text>
          <Text style={styles.tituloLetrasGeneradas}>Letras Restantes</Text>
          <Text style={styles.arrayLetrasGeneradas}>{this.state.letters}</Text>
          <View>          
            <Text style={styles.letra}>{this.state.randomLetter}</Text>
            <View style={styles.viewBotones}>
              <TouchableOpacity style={styles.boton1} onPress={this.handleClick}>                  
                <Text>Generar Letra</Text>                  
              </TouchableOpacity> 
              <TouchableOpacity style={styles.boton2} onPress={this.resetearLetras} >                
                <Text>Resetear</Text>            
              </TouchableOpacity>     
            </View>    
            <Text style={styles.tituloLetrasGeneradas}>Letras Generadas {this.state.count}</Text>
            <Text style={styles.arrayLetrasGeneradas}>{this.state.arrayLetrasGeneradas}</Text>
          </View>          
        </View>
      </View>
       
    );
  }
}

const styles = StyleSheet.create({
  cuerpo: {
    paddingTop: 20,
    alignItems: 'stretch',
  },
  titulo: {
    fontSize: 50,
    alignContent: 'center',
    alignSelf: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
  letra: {
    borderWidth: 1,
    borderColor:'rgba(0,0,0,0.2)',
    borderRadius:200,
    fontSize: 120,
    alignContent: 'center',
    alignSelf: 'center',
  },
  tituloLetrasGeneradas: {
    marginTop: 10,
    fontSize: 22,
    alignContent: 'center',
    alignSelf: 'center',
  },
  arrayLetrasGeneradas: {
    fontSize: 20,
    alignContent: 'center',
    alignSelf: 'center',
  },
  viewBotones: {    
    flexDirection:'row',
    justifyContent: 'center',
  },
  boton1: {
    marginRight: 40,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#0BC3F9',
    borderRadius:100,
    alignSelf: 'center',
  },
  boton2: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#F9120B',
    borderRadius:100,
    alignSelf: 'center',
  },
});
