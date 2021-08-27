import React,{useState,useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput} from 'react-native'

import {colors, parameters,title} from "../../global/styles"
import * as Animatable from 'react-native-animatable'

import {Icon} from 'react-native-elements'

import Header  from '../../components/Header'


export default function SignInScreen(){

    const[textInput2Fossued, setTextInputFossued]=useState(false)

    const textInput1= useRef(1)
    const textInput2= useRef(2)






    return(
        <View style={styles.container}>
            <Header title ="MY ACCOUNT" type="arrow-left"/>

            <View style ={{marginLeft:20, marginTop:10}}>
                <Text style ={title}>Join-In</Text>
            </View>

            <View style ={{alignItems:"center", marginTop:10}}>
                <Text style= {styles.text1}>Enter the Email and Password</Text>
                <Text style= {styles.text1}>registered with your account</Text>
            </View>

            <View>
                <View style={{marginTop:20}}>
                    <TextInput
                    style={styles.TextInput1}
                    placeholder="Email"
                    ref ={textInput1}
                    />
                </View>

                <View style ={styles.TextInput2} >
                <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={400}>
                    <Icon
                        name="lock"
                        iconStyle={{color:colors.grey3}}
                        type="material"
                        

                    />
                </Animatable.View >
                     <TextInput 
                     style= {{width:"80%"}}
                     placeholder="Password"
                     ref ={textInput2}
                     onFocus ={()=>{
                         setTextInputFossued(false)
                     }}

                     onBlur={()=>{
                         setTextInputFossued(true)
                     }}
                    />
                <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={400}>
                        <Icon
                                name="visibility-off"
                                iconStyle={{color:colors.grey3}}
                                type="material"
                                style={{marginRight:10}}

                            />
                
                </Animatable.View>
                </View>


            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1
    },
    text1:{
        color:colors.grey3,
        fontSize:16
    },
    TextInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        marginTop:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15,
        // width: 300
    },
    TextInput2:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        // marginTop:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15,
        // width: 300
    },


})