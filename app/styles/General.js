import { StyleSheet } from "react-native";
import Colors from "./Colors";

const SplashScreenStyle=StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.background
    }
})


export {SplashScreenStyle,Colors}