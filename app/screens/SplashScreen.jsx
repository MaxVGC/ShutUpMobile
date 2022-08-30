import React, { Component } from 'react'
import { View, StatusBar,Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { SplashScreenStyle, Colors } from '@styles/General'

export default class SplashScreen extends Component {

    goToScreen(routeName) {
        this.props.navigation.navigate(routeName);
    }

    componentDidMount() {
        setTimeout(() => {
            this.goToScreen('Login')
        }, 5000, this);
    }

    render() {
        return (
            <View style={SplashScreenStyle.body}>
                <StatusBar backgroundColor="#121212" />
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{
                        width: 200,
                        height: 200,
                        resizeMode: 'contain'
                    }}
                    source={require('@resources/icon.png')}
                />
                <Image
                    style={{
                        height: 50,
                        resizeMode: 'contain',
                        position:'absolute',
                        bottom:20
                    }}
                    source={require('@resources/Imagotipo_Claro.png')}
                />
            </View>
        )
    }
}
