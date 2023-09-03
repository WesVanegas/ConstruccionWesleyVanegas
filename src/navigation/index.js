import React from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import CheckInTime from '../screens/CheckInTimeScreen';
import CheckOutTime from "../screens/CheckOutTimeScreen";
import CheckTimes from "../screens/CheckTimesScreen";
import News from "../screens/NewsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LogIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="CheckInTime" component={CheckInTime}/>
                <Stack.Screen name="CheckOutTime" component={CheckOutTime}/>
                <Stack.Screen name="CheckTimes" component={CheckTimes}/>
                <Stack.Screen name="News" component={News}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;