<View style={styles.viewOpciones}>
                        
                        <View style={styles.viewPalabra}>
                            <Text>Nombres</Text>
                            <TextInput                                
                                placeholder={`Ingrese un nombre con letra ${this.state.letraRandom}`}
                                onChangeText={value => {this.setState({nombre: value.toUpperCase()})}}
                                editable={this.state.isEditable}
                            />                            
                        </View>
                        <View style={styles.viewImagen}>
                            { this.state.nombre != '' ?
                            <Image 
                                style={styles.tinyLogo} 
                                source={
                                    this.state.nombre.charAt(0) != this.state.letraRandom
                                    ? require('../imagenes/cancel.png')
                                    : require('../imagenes/checked.png')                                    
                                }
                            />
                            : <Image />
                            } 
                        </View>
                    </View>

//----------------------------------------------------------------------------------

generaCampos = props => {
    const wList = this.state.words.map((word) => {
        <View style={styles.viewOpciones}>                        
            <View style={styles.viewPalabra}>
                <Text>{word.text}</Text>
                <TextInput                                
                    placeholder={`Ingrese un nombre con letra ${this.props.letraRandom}`}
                    onChangeText={value => {this.setState({valueText: value.toUpperCase()})}}                                                             
                    editable={props.isEditable}
                />                            
            </View>
            <View style={styles.viewImagen}>
                {this.state.valueText != '' ?
                <Image 
                    style={styles.tinyLogo} 
                    source={
                        this.state.valueText.charAt(0) != props.letraRandom
                        ? require('../imagenes/cancel.png')
                        : require('../imagenes/checked.png')                                    
                    }
                />
                : <Image />
                } 
            </View>
        </View>
    }
    )
    return wList
}
