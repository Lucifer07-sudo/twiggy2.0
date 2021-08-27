import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native'

import {colors, parameters} from "../global/styles"

import {Icon} from 'react-native-elements'

// creating login page header

export default function Header({title,type}){
    return(
        <View style = {styles.header}>
            <View style ={{marginLeft:20}}>
                <Icon
                type="material-community"
                name={type}
                color= {colors.headerText}
                size={28}
                onPress={()=>{}}/>
                
            </View>
            <View>
                    <Text style={styles.headerText}>{title}</Text>
                </View>

        </View>
    )
}

//defining header style

const styles = StyleSheet.create({
    header :{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight
    },

    headerText:{
        color:colors.headerText,
        fontSize:22,
        marginLeft:30
       

    }
})