import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { House, ArrowsLeftRight, Lightning,RocketLaunch, UserCircle, HouseLine } from "phosphor-react-native";
import { BottomNavigation } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Feather'
// Import other pages

import Welcome from './components/splash/Welcome';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import VerifyEmail from './components/auth/VerifyEmail';
import CompleteRegistration from './components/auth/CompleteRegistration';

// Authenticated app screens
import Dashboard from './components/app/Dashboard';
import Transactions from './components/app/Transactions';
import Save from './components/app/Save';
import Withdraw from './components/app/Withdraw';
import Account from './components/app/Account';
import colors from './assets/colors/colors';

// Create a stack for our navigation
const Stack = createNativeStackNavigator();

// Create the bottom navigation
bottomNav = BottomNavigation.SceneMap({

});

const Tab = createMaterialBottomTabNavigator();

const appNavigator = () => {
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'dashboard', title: 'Home', icon: <Icon name="lock" color="#000" size={34}/>},
  //   { key: 'transactions', title: 'Transactions', icon: 'album' },
  //   { key: 'save', title: 'Save', icon: 'piggy-bank' },
  //   { key: 'withdraw', title: 'Withdraw', icon: 'flash' },
  //   { key: 'account', title: 'Account', icon: 'account' },
  // ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   dashboard: Dashboard,
  //   transactions: Transactions,
  //   save: Save,
  //   withdraw: Withdraw,
  //   account: Account,
  // });

  // return (
  //   <BottomNavigation
  //     navigationState={{ index, routes }}
  //     onIndexChange={setIndex}
  //     renderScene={renderScene}
  //   />
  // );
  
  return(
    <Tab.Navigator 
          iconContainerSize={30}
          labelFontSize={30}
          barStyle={{ backgroundColor: colors.blue, paddingBottom: 10, paddingTop: 10, color: colors.altBlue}}
          activeColor="#F5A623"
          inactiveColor={colors.text}
          shifting={false}
          >
        <Tab.Screen name='Home' 
                    title="Home"
                    component={Dashboard} 
                    // barStyle={{ backgroundColor: colors.blue, 
                    //   // width: '100%',
                    //   paddingBottom: 10, 
                    //   paddingTop: 10,
                    //   borderColor: "red",
                    //   color: colors.altBlue
                    // }}
                  
                    options={{
                      tabBarIcon: ({ color }) => (
                        <HouseLine weight="fill" color={color} style="bold" size={26} />
                      )}}
          />
        <Tab.Screen name='Transactions' 
                    component={Transactions} 
                    options={{headerShown:false,
                      tabBarIcon: ({ color }) => (
              <ArrowsLeftRight weight="fill" color={color} size={26} />
          )}}
          />
        <Tab.Screen name='Save' 
                    component={Save} 
                    options={{headerShown:false,
                      tabBarIcon: ({ color }) => (
                          <Lightning weight="fill" color={color} size={26} />
                       )}
          }/>
        <Tab.Screen name='Withdraw' 
                    component={Withdraw}       
                    options={{headerShown:false,
                              tabBarIcon: ({ color }) => (
                                <RocketLaunch weight="fill" color={color} size={26} />
                            )}
          }/>
        <Tab.Screen name='Account' 
                    component={Account}       
                    options={{headerShown:false,
                              tabBarIcon: ({ color }) => (
                                <UserCircle weight="fill" color={color} size={26} />
                )}
          }/>
    </Tab.Navigator>
  );
}

// Delay the splash screen a little but
// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 2000);

const App =  () => {
  // Import fonts for the project
  let [fontsLoaded] = useFonts({
    'Inter-SemiBold': 'https://rsms.me/inter/font-files/Inter-SemiBold.otf?v=3.12',
    'Inter-Bold': 'https://rsms.me/inter/font-files/Inter-Bold.otf?v=3.12',
    'Inter-Black': 'https://rsms.me/inter/font-files/Inter-Black.otf?v=3.12',
    'Inter-Regular': 'https://rsms.me/inter/font-files/Inter-Regular.otf?v=3.12',
    'Inter-Medium': 'https://rsms.me/inter/font-files/Inter-Medium.otf?v=3.12',
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' options={{headerShown:false}}>
                {/* Add different pages created to the stack */}
                <Stack.Screen
                  name="Dashboard"
                  component={appNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
                <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <Stack.Screen name='VerifyEmail' component={VerifyEmail} options={{headerShown:false}}/>
                <Stack.Screen name='CompleteRegistration' component={CompleteRegistration} options={{headerShown:false}}/>
                {/* <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>  */}

            </Stack.Navigator>
        </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;