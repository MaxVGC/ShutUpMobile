import React from "react";
import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import Constants from 'expo-constants';

const Main = () => {
    return (
        <View style={styles.View}>
            <StatusBar backgroundColor="#121212" />
            <Image style={styles.image} source={require('../assets/x.png')} />
            <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }}>¡Bienvenido a ShutUp!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "70%",
        height: "70%",
        resizeMode: 'contain'
    }
});


export default Main;