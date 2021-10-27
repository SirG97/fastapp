import React, { Component } from 'react';
import {ImageBackground, Image, StyleSheet, View, Text,  SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/native-stack";
import { IconContext, EnvelopeSimple, Heart, Cube } from "phosphor-react-native";

import { TextInput, Button } from 'react-native-paper';
import colors from '../../assets/colors/colors';
import pattern from '../../assets/patterns/pattern';



const VerifyEmail = ({navigation}) =>{
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <React.Fragment>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.blue }}>
            <ImageBackground source={pattern.bg} style={styles.image} >
                <Image>

                </Image>
            </ImageBackground>
        </View>
        <SafeAreaView style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <View style={styles.registerTextContainer}>
                <Text style={styles.registerText}>Enter code sent to your email address</Text>
            </View>
            <View style={styles.authFormContainer}>
                <View>
                    <Text style={styles.emailLabel}>Enter code</Text>
                </View>
                
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    {/* <View style={styles.inputWithIcon}> */}
                      
                        <TextInput
                                style={styles.input}
                                mode='outlined'
                                // label='Enter your email'
                                color='#7B8794'
                                outlineColor='#7B8794'
                                onChangeText={onChangeText}
                                placeholder="*****"
                                placeholderTextColor="#7B8794"
                                // left={<TextInput.Icon name="email" color={colors.text}/>}
                                value={text}
                                theme={{ colors: { text: colors.text } }}
                            >
                        </TextInput>
                        <Button 
                            mode="contained" 
                            onPress={() => navigation.navigate('CompleteRegistration')}
                            style={styles.startedBtn}>
                            Continue
                        </Button>
                        
                        {/* <TouchableOpacity style={styles.signInLink}> */}
                        <Text style={styles.gotAccount}>Wrong Email?</Text>
                                <Text style={styles.signInText}
                                    onPress={() => navigation.navigate('Register')}>Start over</Text>
                            
                    {/* </View> */}

                </View>

            </View>
         
        </SafeAreaView>
        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    flexbox:{

    },

    image: {
        flex: 1,
        justifyContent: "center",
        position: 'absolute',
        width: '100%', 
        height: '100%',
        opacity: 0.5 

      },

      authFormContainer:{
        alignItems: 'flex-start', 
        justifyContent: 'center',
        width: '85%',
 
        marginLeft: 'auto',
        marginRight: 'auto',
      },

      registerTextContainer: {
        margin: 32,
        marginLeft: 32,
        marginBottom: 51,
        // borderColor: '#15169A',
        // borderWidth: 2,
      },
      
      registerText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 24,
        fontWeight: '300',
        lineHeight: 24,
        color: colors.blue,
    
      },

      emailLabel:{
        fontSize: 12,
        lineHeight: 12,
        textTransform: 'uppercase',
        fontFamily: 'Inter-Black',
        color: '#323F4B'
      },

      inputWithIcon:{
      
        justifyContent: 'center',
        alignItems: 'center',
      },

      inputIcon:{
        position: 'absolute',
        
      },
      
      input: {
        // height: 52,
        margin: 12,
        width: '100%',
        // borderWidth: 1,
        // padding: 12,
        alignSelf: 'flex-start',
        borderRadius: 8,
        backgroundColor: 'white',
        fontFamily: 'Inter-Black',
        fontSize: 16,
        // borderWidth: 0.5,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 41,
        color: colors.text,
        fontWeight: 'bold',
        
      },
      
      startedBtn:{
          width: '100%',
          paddingTop: 15,
          paddingBottom: 15,
          marginBottom: 40,
          borderRadius: 4,
          backgroundColor: colors.blue
      },

      gotAccount:{
          fontSize: 16,
          fontFamily: 'Inter-SemiBold',
          color: colors.text
      },

      signInLink:{
        paddingLeft: 20
      },

      signInText:{
          fontSize: 16,
          fontFamily: 'Inter-SemiBold',
          color: colors.blue
      }
})

export default VerifyEmail;