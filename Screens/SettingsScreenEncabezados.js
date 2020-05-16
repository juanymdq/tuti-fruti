import React, { Component} from 'react';
import {Dimensions, StyleSheet, Switch, Text, View, ScrollView} from 'react-native';

import {words} from './TutiFrutti/Words'



export default class SettingsScreenEncabezados extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words,
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