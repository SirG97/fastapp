import React, { Component } from  'react';
import {StyleSheet, Dimensions, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/native-stack";
import colors from '../../assets/colors/colors';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const Welcome = ({navigation}) => {
    return(
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('./img/logo.png')}  style={styles.logo}/>
                </View>
                <View style={styles.splashImageContainer}>
                    <Image source={require('./img/welcome.png')} style={styles.splashImage} />
                    {/* <Text>Welcome Screen</Text> */}
                </View> 
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.RegisterBtnContainer}>
                    <TouchableOpacity style={[styles.themeBlue, styles.RegisterBtn, styles.authBtnBorderRadius]} onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.themeBlueColor, styles.authBtnText, styles.Reg]}>Login</Text>
                    </TouchableOpacity>
                </View>
                

                <View style={styles.loginBtnContainer}>
                    <TouchableOpacity style={[styles.themeBlueBorder,styles.loginBtn, styles.authBtnBorderRadius]} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.authBtnText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>

    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 8, 
        alignItems: 'stretch', 
        justifyContent: 'flex-start', 
        backgroundColor: '#E5E5E5' 
    },
    logoContainer:{
        flex: 2,
        width: width,
        height: 180,
        alignSelf: 'center'
    },

    logo:{
        alignSelf: 'center',
        width: 220, 
        height: 70,
        marginTop: 90,

    },

    splashImageContainer:{
        flex: 6,
        backgroundColor: '#E5E5E5',
        width: width, 
        alignSelf: 'center',
        marginTop: 20,
       
    },

    splashImage:{
        // borderColor: 'blue',
        // borderWidth: 1,
        maxWidth: width-40, 
        height: 400,
        marginTop: 50,
        alignSelf: 'center'
    },

    buttonContainer:{
        backgroundColor: '#E5E5E5',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width, 

    },

    loginBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center', 
        alignSelf: 'center',
       
    },

    Reg:{
        paddingTop: 17,
        paddingBottom: 17,
    },

    authBtnText: {
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 53,
      paddingRight: 53,
      fontFamily: 'Inter-Black'
    },

    authBtnBorderRadius:{
        borderRadius: 5
    },

    RegisterBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center', 
        alignSelf: 'center',
        
    },

    RegisterBtn: {

    },

    themeBlue:{
        backgroundColor: colors.blue,
        
    },
    themeBlueColor:{
        color: 'white',
        
    },

    themeBlueBorder:{
        borderColor: '#15169A',
        borderWidth: 2,
    },

});
export default Welcome;