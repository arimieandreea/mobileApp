import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class ListPa extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Arimie Andreea',
         },
         {
            id: 1,
            name: 'Marginean Madalina',
         },
         {
            id: 2,
            name: 'Raul Oproiu',
         },
         {
            id: 3,
            name: 'Iovan Irina',
         }
      ]
   }
     goToAbout = (name) => {
          Actions.about({text: name})
          }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.goToAbout(item.name)}
                   >

                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default ListPa

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})