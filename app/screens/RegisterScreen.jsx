import React from 'react'
import { Colors } from '@styles/General'
import { View, Text, Image, TouchableOpacity, StyleSheet, BackHandler, ScrollView, TextInput, Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons';
import SoundPlayer from 'react-native-sound-player'


export default function RegisterScreen({ navigation }) {
    const [data, setData] = React.useState({
        nameUser: null,
        lastNameUser: null,
        userName: null,
        password: null,
        phoneNumber: null,
        confirmPassword: null
    });
    const [alert, toogleAlert] = React.useState(false);

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    function checkData() {
        var aux = true;
        if (data.nameUser == null || data.nameUser.length == 0) {
            aux = false;
        }
        if (data.lastNameUser == null || data.lastNameUser.length == 0) {
            aux = false;
        }
        if (data.userName == null || data.userName.length == 0) {
            aux = false;
        }
        if (data.password == null || data.password.length == 0) {
            aux = false;
        }
        if (data.password != data.confirmPassword) {
            aux = false;
        }
        if (!aux) {
            SoundPlayer.playSoundFile('prueba', 'wav')
            toogleAlert(true)
        } else {
            console.log("paso")
        }
    }

    React.useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);

    return (
        <KeyboardAwareScrollView contentContainerStyle={Styles.ScrollView}>
            <View style={{ width: "100%", marginBottom: 20 }}>
                <Text style={{ ...Styles.Text, fontSize: 34 }}>¡Registrate!</Text>
                <Text style={{ ...Styles.Text, fontSize: 13, opacity: 0.5 }}>Ingresa aqui tus datos :D</Text>
            </View>
            <View style={{ width: "100%" }}>
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Nombre completo</Text>
                <TextInput
                    onChangeText={e => setData({ ...data, nameUser: e })}
                    autoCapitalize="words"
                    style={Styles.Input}
                />
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Correo</Text>
                <TextInput
                    onChangeText={e => setData({ ...data, lastNameUser: e })}
                    keyboardType="email-address"
                    autoCapitalize='none'

                    style={Styles.Input}
                />
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Numero de telefono</Text>
                <TextInput
                    onChangeText={e => setData({ ...data, lastNameUser: e })}
                    keyboardType="number-pad"
                    style={Styles.Input}
                />
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Nombre de usuario</Text>
                <TextInput
                    onChangeText={e => setData({ ...data, userName: e })}
                    autoCapitalize='none'
                    style={Styles.Input}
                />
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Contraseña</Text>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={e => setData({ ...data, password: e })}
                    placeholder="Minimo 8 caracteres"
                    style={Styles.Input}
                />
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Confirmar contraseña</Text>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={e => setData({ ...data, confirmPassword: e })}
                    placeholder="Minimo 8 caracteres"
                    style={Styles.Input}
                />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
                <TouchableOpacity style={{}} onPress={() => { checkData() }}>
                    <LinearGradient
                        colors={[Colors.Azul_1, Colors.Azul_2]}
                        style={Styles.Button}
                    >
                        <Text style={Styles.Text}>¡Vamos!</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            {alert ? (
                <Animatable.View style={Styles.AlertContainer} animation="bounceIn">
                    <View style={Styles.Alert}>
                        <TouchableOpacity style={{}} onPress={() => { toogleAlert(false) }}>
                            <Icon style={{alignItems:"center",justifyContent:"center"}} name="close-circle-outline" size={150} color="#d50000" />
                            <LinearGradient
                                colors={[Colors.Azul_1, Colors.Azul_2]}
                                style={{ ...Styles.Button, alignItems: "center" }}
                            >
                                <Text style={Styles.Text}>Cerrar</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            ) : (
                null
            )}
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
        height: Dimensions.get("window").height,
        position: "relative",
        backgroundColor: '#121212',
        paddingHorizontal: 24,
        paddingVertical: 24,
        justifyContent: "space-around"
    },
    Input: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.Azul_2,
        marginBottom: 20,
        paddingBottom: 5,
    },
    Button: {
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    AlertContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: "#1d1d1d80",
        alignItems: 'center',
        justifyContent: 'center',
    },
    Alert: {
        width: (Dimensions.get("window").width * (0.62)),
        height: (Dimensions.get("window").width * (0.62)),
        backgroundColor: "#262626",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});