import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,  
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const A = 65 // código ASCII del carácter.
const newArray = []
export default class App extends React.Component {
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
    const letter = this.state.letters[this.rand(this.state.letters.length - 1)]    
  
   // this.setState({letters: this.state.letters.filter((item) => {item !== letter})});  
    this.verificaLetrasEnArray(letter)
    this.setState({ randomLetter: letter })
    
  }

  verificaLetrasEnArray = (letra) => {
    if (!this.state.arrayLetrasGeneradas.find(element => element === letra)){
      newArray.push(letra)
      const contar = this.state.count + 1
      this.setState({ count: contar})
      this.setState({ arrayLetrasGeneradas: newArray })    
    }else{
      Alert.alert('ATENCION',`La letra ${letra} ya salio!!!!!`)
    }
  }

  restearLetras = () => {
    this.state.arrayLetrasGeneradas.length = 0
    this.setState({ arrayLetrasGeneradas: [] })
    this.setState({ count: 0 })
    this.setState({ randomLetter: null })
  }

  render() {
    return (
      <View style={styles.cuerpo}>
        <View>
          <Text style={styles.titulo}>TUTI FRUTI</Text>
          <View>          
            <Text style={styles.letra}>{this.state.randomLetter}</Text>
            <View style={styles.viewBotones}>
              <TouchableOpacity style={styles.boton1} onPress={this.handleClick}>                  
                <Text>Generar Letra</Text>                  
              </TouchableOpacity> 
              <TouchableOpacity style={styles.boton2} onPress={this.restearLetras} >                
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
    paddingTop: 50,
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
    fontSize: 190,
    alignContent: 'center',
    alignSelf: 'center',
  },
  tituloLetrasGeneradas: {
    marginTop: 20,
    fontSize: 22,
    alignContent: 'center',
    alignSelf: 'center',
  },
  arrayLetrasGeneradas: {
    fontSize: 20,
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
    backgroundColor:'#fff',
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
    backgroundColor:'#fff',
    borderRadius:100,
    alignSelf: 'center',
  },
});
