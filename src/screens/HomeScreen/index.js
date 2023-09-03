import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import SignInScreen, {username} from "../SignInScreen/SignInScreen";

const HomeScreen = () =>{

    const navigation = useNavigation();

    const onCheckInPressed = () =>{
        console.warn("Go to Check In Time");
        navigation.navigate('CheckInTime');
    };

    /*
    const onCheckOutPressed = () =>{
        console.warn("Go to Check Out Time");
        navigation.navigate('CheckOutTime');
    };
    */

    const onCheckTimesPressed = () =>{
        console.warn("Go to Check Times");
        navigation.navigate('CheckTimes');
    };

    const onNewsPressed = () =>{
        console.warn("Go to News");
        navigation.navigate('News')
    };

    /*const onUsuarioPressed = () => {
        console.warn({username})
    }
    */

    return(
        <View style ={style.root}>
            <Text>Bienvenido</Text>
            <CustomButton text="Check In Time" onPress={onCheckInPressed}/>
            {/*<CustomButton text="Check Out Time" onPress={onCheckOutPressed} />*/}
            <CustomButton text="Check Times" onPress={onCheckTimesPressed}/>
            <CustomButton text="News" onPress={onNewsPressed} />
            {/*<CustomButton text="Check usser" onPress={onUsuarioPressed}/>*/}
        </View>
    )
};

const style = StyleSheet.create({
    root:{
        alignItems: 'center',
        paddingTop: 100,
    },

});

export default HomeScreen;