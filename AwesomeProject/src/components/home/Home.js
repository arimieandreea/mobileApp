import React from 'react'
import ListPa from './ListPa.js'
import { Actions } from 'react-native-router-flux'
import { Component } from 'react'
import {View} from 'react-native'

class Home extends Component{
render() {
      return (
            <View>
            {
                <ListPa />
            }
            </View>
      )}
      }
export default Home