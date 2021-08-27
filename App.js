import React from 'react'

import { View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native'

import {colors} from './src/global/styles'
import SignInScreen from "./src/Screens/authScreens/SignInScreen"
export default function App(){
  return(
    <View style = {styles.container}>
      < StatusBar 
      barStyle="light-content"
      backgroundColor = {colors.statusbar}
      />
      <SignInScreen/>
      


    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})
