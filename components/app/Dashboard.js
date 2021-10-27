import React, { Component } from 'react';
import {ImageBackground, Image, StyleSheet, View, Text,  SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/native-stack";
import { Bell } from "phosphor-react-native";
import {Shadow} from 'react-native-shadow-2';
import Icon from 'react-native-vector-icons/Feather';
import DropShadow from "react-native-drop-shadow";
import colors from '../../assets/colors/colors';
import pattern from '../../assets/patterns/pattern';

import { TextInput, Button } from 'react-native-paper';


const Dashboard = () => {
    return(
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.pageTitleContainer}>
                        <Text style={styles.pageTitle}>Hello Jackyln</Text>
                    </View>
                    
                    <View style={styles.notificationContainer}>
                        <Bell weight="fill" color={colors.lightBlue} size={28}/>
                    </View>
                </View>
                <View style={styles.overviewContainer}>
                    <Shadow
                        distance={5}
                        startColor={'#00000010'}
                        containerViewStyle={{marginVertical: 0}}
                        radius={8}>
                        <View style={[styles.card, {marginVertical: 0}]}>
                        
                        <ImageBackground 
                            source={pattern.dashboard} 
                            style={styles.dashboardBg} 
                            resizeMode="cover"
                            imageStyle={{ resizeMode: 'repeat' }}>
                            <View style={styles.balance}>
                                <View style={{flex: 1, height: 130, marginLeft: 16, justifyContent: 'center'}}>
                                    <Text style={styles.balTitle}>Available Balance</Text>
                                    <Text style={styles.balFigure}>$0.00</Text> 
                                </View>
                            </View>
                        </ImageBackground>
                    
                        </View>
                    </Shadow>
                </View>
               
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        // alignItems: 'center', 
        // justifyContent: 'center', 
        paddingTop: 32,
        paddingRight: 32,
        paddingLeft: 32,
       
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 22,
        // borderWidth: 2,
        // borderColor: 'red'
    },


    pageTitleContainer:{

    },

    pageTitle:{
        fontFamily: 'Inter-Bold',
        fontSize: 32,
        fontWeight: '300',
        // lineHeight: 24,
        color: colors.blue,
        marginBottom: 3
    },

    notificationContainer:{
        justifyContent: 'center',
        backgroundColor: colors.lightBlueBg,
        borderRadius: 10,
        paddingLeft: 8,
        paddingRight: 8,
    },

    overviewContainer:{
        marginTop: 31,
        height: 200,
        width: '100%'
    },

    dashboardBg:{
        width: '100%',
        height: 130,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.23,
        shadowRadius: 7.62,

        elevation: 4,
    },

    balance: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    heading: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
        marginBottom: 13,
        width: '100%',
        borderColor: 'red',
      },
      card: {
        backgroundColor: colors.blue,
        borderRadius: 8,
        paddingVertical: 0,
        paddingHorizontal: 0,
        width: '100%',
        marginVertical: 10,
      },
      elevation: {
        elevation: 20,
        shadowColor: '#000000',
      },

      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },

      balTitle:{
          fontFamily: 'Inter-Regular',
          color: 'white',
          fontSize: 16,
          lineHeight: 32
      },
      balFigure:{
          fontFamily: 'Inter-Bold',
          color: 'white',
          fontSize: 32
      },

});

export default Dashboard;