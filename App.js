/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});  */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class App extends React.Component{
  render() {
    return(
      <View style={styles.container}>
      <Text style={styles.textStyle}>
        My Custom App!!!
      </Text>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#013243",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 36,
    color: "#c5eff7"
  }
});