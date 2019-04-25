import React from 'react';
import { View, Text, StyleSheet , Image ,TouchableOpacity} from 'react-native';


export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      uri: require('./assets/DiceAssets/dice1.png')
    };
    
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  }

  playButton= () => {
    var rNumber = this.getRandomNumber();

    switch (rNumber) {
      case 1:
        this.setState({ uri: require('./assets/DiceAssets/dice1.png') });
      break;
      case 2:
        this.setState({ uri: require('./assets/DiceAssets/dice2.png') });
      break;
      case 3:
        this.setState({ uri: require('./assets/DiceAssets/dice3.png') });
      break;
      case 4:
        this.setState({ uri: require('./assets/DiceAssets/dice4.png') });
      break;
      case 5:
        this.setState({ uri: require('./assets/DiceAssets/dice5.png') });
      break;
      case 6:
        this.setState({ uri: require('./assets/DiceAssets/dice6.png') });
      break;
    
      default:
        this.setState({ uri: require('./assets/DiceAssets/dice1.png') });
        break;
    }

  }

  render() {
    return(
      <View style={styles.container}>
      <Image source={this.state.uri} />
      
      <TouchableOpacity onPress={this.playButton}>
        <Text style={styles.gameButton}>
          Roll Dice
        </Text>
      </TouchableOpacity>
     
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EA7773",
    alignItems: "center",
    justifyContent: "center"
  },
  gameButton: {
    marginTop:35,
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderColor: "#FFF"
  }
});