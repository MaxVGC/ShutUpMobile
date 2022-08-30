import React from 'react'
import { SplashScreenStyle, Colors } from '@styles/General'
import { View, Text, Image, StyleSheet, BackHandler, ScrollView } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export default function RegisterScreen({ navigation }) {

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    React.useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);

    return (
        <KeyboardAwareScrollView contentContainerStyle={Styles.ScrollView}>
            <Text style={Styles.Text}>Sus</Text>
        </KeyboardAwareScrollView>
    )
}

const Styles = StyleSheet.create({
    Text: {
        color: "#fff"
    },
    Container: {
        backgroundColor: "#121212",

    },
    ScrollView: {
        flexDirection: 'column',
        flexGrow: 1,
        position: "relative",
        backgroundColor: '#121212',
        paddingHorizontal:8
    }
});