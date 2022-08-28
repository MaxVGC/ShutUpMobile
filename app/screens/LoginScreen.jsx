import React, { Component } from 'react'
import { Text, BackHandler, View,StyleSheet } from 'react-native'

export default class LoginScreen extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  onBackButtonPressed() {
    return true;
  }
  render() {
    return (
      <View style={styles.View}>
        <Text style={{ textAlign: 'center' }}>LoginScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  View: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'center',
  }
});
