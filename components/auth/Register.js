import React, { Component } from 'react';
import {ImageBackground, Image, StyleSheet, View, Text,  SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/native-stack";
import { IconContext, EnvelopeSimple, Heart, Cube } from "phosphor-react-native";

import { TextInput, Button } from 'react-native-paper';
import colors from '../../assets/colors/colors';
import pattern from '../../assets/patterns/pattern';



const Register = ({navigation}) =>{
    const [text, onChangeText] = React.useState("");
    const [password, onChangePassword] = React.useState(null);
    const [confirmPassword, onChangeConfirmPassword] = React.useState(null);
    return (
        <React.Fragment>
        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.blue }}>
            <ImageBackground source={pattern.bg} style={styles.image} >
                <Image>

                </Image>
            </ImageBackground>
        </View>
        <SafeAreaView style={styles.safearea}>
            <View style={styles.registerTextContainer}>
                <Text style={styles.registerText}>Let's get you registered</Text>
            </View>
            <View style={styles.authFormContainer}>
                <View>
                    <Text style={styles.emailLabel}>Enter your email</Text>
                </View>
                
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}>      
                        <TextInput
                                style={styles.input}
                                mode='outlined'
                                // label='Enter your email'
                                color='#7B8794'
                                outlineColor='#7B8794'
                                onChangeText={onChangeText}
                                placeholder="name@email.com"
                                placeholderTextColor="#7B8794"
                                left={<TextInput.Icon name="email" color={colors.text}/>}
                                value={text}
                                theme={{ colors: { text: colors.text } }}
                            >
                        </TextInput>
                </View>
                <View>
                    <Text style={styles.emailLabel}>Password</Text>
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
                                secureTextEntry
                                placeholderTextColor="#7B8794"
                                left={<TextInput.Icon name="lock" color={colors.text}/>}
                                value={password}
                                theme={{ colors: { text: colors.text } }}
                            >
                        </TextInput>
                </View>
                                <View>
                    <Text style={styles.emailLabel}>Confirm Password</Text>
                </View>
                
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}>      
                        <TextInput
                                style={styles.input}
                                mode='outlined'
                                // label='Enter your email'
                                color='#7B8794'
                                outlineColor='#7B8794'
                                onChangeText={onChangeConfirmPassword}
                                placeholder="********"
                                placeholderTextColor="#7B8794"
                                secureTextEntry
                                left={<TextInput.Icon name="lock" color={colors.text}/>}
                                value={confirmPassword}
                                theme={{ colors: { text: colors.text } }}
                            >
                        </TextInput>
                </View>
                <Button 
                            mode="contained" 
                            onPress={() => navigation.navigate('VerifyEmail')}
                            style={styles.startedBtn}>
                            Get Started
                        </Button>
                        <View style={styles.authFooterLink}>
                        <Text style={styles.gotAccount}>Got an account? </Text>
                        <Text style={styles.signInText} onPress={() => navigation.navigate('Login')}>Sign in</Text>
                        </View>

            </View>
        </SafeAreaView>
        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    safearea:{
        flex: 10, 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start'
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
        marginBottom: 31,
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
        marginBottom: 21,
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '100%',
        //         borderColor: '#15169A',
        // borderWidth: 2,
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
      
})

export default Register;