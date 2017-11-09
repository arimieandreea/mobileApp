import {TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';

class Input extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholder = {this.props.fill}
                     placeholderTextColor = "#9a73ef"
                     autoCapitalize = "none"
                    />
      </View>
    );
  }
}


export default Input

const styles = StyleSheet.create({
   container: {
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'black',
      borderWidth: 5
}
})