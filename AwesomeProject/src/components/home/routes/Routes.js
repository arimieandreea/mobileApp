import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Home';
import About from '../About';
import ListPa from '../ListPa';
import { Component } from 'react'

//class Routes extends Component{
//render() {
//
//      return (
//           <Router>
//                <Scene key = "root">
//                   <Scene key = "home" component = {Home} title = "Home" initial = {true} />
//                   <Scene key = "about" component = {About} title = "About" />
//                   <Scene key = "list" component = {List} title = "List" />
//                </Scene>
//             </Router>
//      )}
//      }
const Routes = () => (
                   <Router>
                      <Scene key = "root">
                         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
                         <Scene key = "about" component = {About} title = "About" />
                          <Scene key = "list" component = {ListPa} title = "List" />
                      </Scene>
                   </Router>
                )

                export default Routes