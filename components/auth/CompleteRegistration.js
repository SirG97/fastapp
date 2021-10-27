import React, { Component } from 'react';
import {ImageBackground, Image, StyleSheet, View, Text,  SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/native-stack";

import { IconContext, EnvelopeSimple, Heart, Cube } from "phosphor-react-native";
import Icon from 'react-native-vector-icons/Feather'



import { TextInput, Button } from 'react-native-paper';
import colors from '../../assets/colors/colors';
import pattern from '../../assets/patterns/pattern';



const CompleteRegistration = ({navigation}) =>{
    const [text, onChangeText] = React.useState("");
    const [password, onChangePassword] = React.useState('');
    return (
        <React.Fragment>

        <SafeAreaView style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <View style={styles.closeBtnContainer}>
                <Icon name="x" 
                        size={30} 
                        color={colors.text}
                        onPress={() => navigation.navigate('Welcome')}/>
                
            </View>
            <View style={styles.registerTextContainer}>
                <Text style={styles.loginTitle}>Complete Registration</Text>
            </View>
            <View style={styles.authFormContainer}>
                <View>
                    <Text style={styles.emailLabel}>Surname</Text>
                </View>
                
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    {/* <View style={styles.inputWithIcon}> */}
                      
                        <TextInput
                                style={styles.input}
                                mode='outlined'
                                // label='Enter your email'
                                // textContentType='string'
                                color='#7B8794'
                                outlineColor='#7B8794'
                                onChangeText={onChangeText}
                                placeholder="Surname"
                                placeholderTextColor="#7B8794"
                                left={<TextInput.Icon name="account"  color={colors.text}/>}
                                value={text}
                                theme={{ colors: { text: colors.text } }}
                            >
                        </TextInput>
                       
                        
                

                </View>

                <View>
                    <Text style={styles.emailLabel}>First name</Text>
                </View>
                
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    {/* <View style={styles.inputWithIcon}> */}
                      
                        <TextInput
                                style={styles.input}
                                mode='outlined'
                                // label='Enter your email'
                                // textContentType='string'
                                color='#7B8794'
                                outlineColor='#7B8794'
                                onChangeText={onChangeText}
                                placeholder="First name"
                                placeholderTextColor="#7B8794"
                                left={<TextInput.Icon name="account"  color={colors.text}/>}
                                value={text}
                                theme={{ colors: { text: colors.text } }}
                            >
                        </TextInput>
                       
                        
                

                </View>

                <View>
                    <Text style={styles.emailLabel}>Phone</Text>
                </View>
                
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    
                      
                        <TextInput
                                style={styles.input}
                                mode='outlined'
                                // label='Enter your email'
                                color='#7B8794'
                                outlineColor='#7B8794'
                                
                                onChangeText={onChangePassword}
                                placeholder="********"
                                placeholderTextColor="#7B8794"
                                left={<TextInput.Icon name="phone" color={colors.text}/>}
                                value={password}
                                theme={{ colors: { text: colors.text } }}
                            >
                        </TextInput>
                        <Button 
                            mode="contained" 
                            onPress={() => navigation.navigate('Dashboard')}
                            style={styles.startedBtn}>
                            Continue
                        </Button>
                        
                      
                </View>

            </View>
         
        </SafeAreaView>
        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    flexbox:{

    },

    closeBtnContainer:{
        paddingTop: 100,
        paddingLeft: 32
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
        marginBottom: 21,
        // borderColor: '#15169A',
        // borderWidth: 2,
      },
      
      loginTitle: {
        fontFamily: 'Inter-Bold',
        fontSize: 32,
        fontWeight: '300',
        // lineHeight: 24,
        color: colors.blue,
        marginBottom: 3
    
      },

      loginSubTitle:{
        color: '#15169A',
        fontWeight: '400',
        fontFamily: 'Inter-Medium'
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
        marginBottom: 25,
        marginTop: 5,
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

      authFooterLink:{
          flexDirection: 'row'
      },

      gotAccount:{
          fontSize: 16,
          fontFamily: 'Inter-SemiBold',
          color: colors.text,
          flexWrap: 'wrap'
      },

      signInLink:{
        paddingLeft: 20
      },

      signInText:{
          fontSize: 16,
          fontFamily: 'Inter-SemiBold',
          color: colors.blue,
          flexWrap: 'wrap'
      },

      forgotPassword:{
        marginTop: 20,
        color: colors.text,
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
      },
})

export default CompleteRegistration;