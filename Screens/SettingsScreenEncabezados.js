import React, { Component} from 'react';
import {Dimensions, StyleSheet, Switch, Text, View, ScrollView} from 'react-native';

const { height, width } = Dimensions.get('window');

export default class SettingsScreenEncabezados extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: [
        { id: 1, text: 'Nombres', toggle:false}, 
        { id: 2, text: 'Colores', toggle:false}, 
        { id: 3, text: 'Paises', toggle:false},
        { id: 4, text: 'Marcas', toggle:false},
        { id: 5, text: 'Peliculas', toggle:false},
        { id: 6, text: 'Animales', toggle:false},
        { id: 7, text: 'Comidas', toggle:false},
        { id: 8, text: 'Frutas', toggle:false},
        { id: 9, text: 'Actores', toggle:false},
      ]
    }
  };

 renderWordList(){    
    const wordList = this.state.words.map((word, i, wordArray) =>        
        <View key={word.id} style={styles.wordsContainer}>
            <Text>{word.text}</Text>
            <Switch
                style={styles.pilgrimsWordSwitch}
                onValueChange={(toggleValue) => {
                    wordArray[i].toggle = toggleValue;
                    this.setState({words: wordArray});
                }}
                value={ word.toggle }
            />
        </View>
    )    
    return wordList
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        {this.renderWordList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wordsContainer: {
    alignItems:'center', 
    flexDirection:'row',
    height:100,
    padding:20,
  },
  pilgrimsWordSwitch: {
    flex:1, 
    justifyContent:'flex-end'
  }
});