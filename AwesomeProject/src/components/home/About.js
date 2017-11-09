import React from 'react'
import Input from './Input.js'
import { TouchableOpacity, Text,StyleSheet,TextInput, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import email from 'react-native-email'
import { Component } from 'react'

class About extends Component{

constructor(){
    this.state={text:'Body of email'};
}


 goToHome = () => {
      Actions.home()
   }

    handleEmail = (text) => {
           const to = ['madalina_marginean96@yahoo.com']
           email(to, {
               // Optional additional arguments
               cc: [],
               bcc: '',
               subject: 'Show how to use',
               body: text
           }).catch(console.error)
       }


render() {
      return (


            <TouchableOpacity style = {{ margin: 128 }} onPress = {() => this.goToHome()}>
               <Input fill={this.props.text} />
                <TextInput style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    placeholder = ""
                                    placeholderTextColor = "#9a73ef"
                                    autoCapitalize = "none"
                                    value={this.state.text}
                                   />
               <Text>Back</Text>
               <Button title="Send Mail" onPress={()=>this.handleEmail(this.state.text)} />
            </TouchableOpacity>
         )
      }
      }

export default About

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