import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './screens/fb';
import Instagram from './screens/ins';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Fb : {screen : Facebook},
  Ins : {screen : Instagram}
})

const AppContainer = createAppContainer(TabNavigator)