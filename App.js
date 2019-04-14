import React from 'react';
import { View, Text, StyleSheet , Image ,TouchableOpacity} from 'react-native';


export default class App extends React.Component{

  playButton= () => {
    alert("hello");
  }

  render() {
    return(
      <View style={styles.container}>
      <Image 
      source={require('./assets/DiceAssets/dice1.png')}
        />
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