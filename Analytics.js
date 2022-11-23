import React, {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  'Bubbly-Regular': require('./assets/fonts/Bubbly-Regular.otf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Analytics</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffeee6',
  },
  container: {
    paddingTop: 80, 
    paddingHorizontal: 20, 
  },
  sectionTitle: {
    fontSize: 24, 
    fontWeight: 'bold'
  },

  header: {
    fontFamily: 'Bubbly-Regular',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8c7373'
  },

  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addWrapper: {
    width: 60, 
    height: 60, 
    backgroundColor: "#FFF",
    borderRadius: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#C0C0C0",

  },
  addText: {

  }
});
