import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "@screens/SplashScreen"
import LoginScreen from "@screens/LoginScreen"
import RegisterScreen from "@screens/RegisterScreen"


const AppNavigation=createStackNavigator({
    Splash:{
        screen:SplashScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Login:{
        screen:LoginScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Register:{
        screen:RegisterScreen,
        navigationOptions:{
            headerShown:false
        }
    }
})

export default createAppContainer(AppNavigation)