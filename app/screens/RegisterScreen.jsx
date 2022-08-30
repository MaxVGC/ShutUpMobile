import React from 'react'
import { Colors } from '@styles/General'
import { View, Text, Image, TouchableOpacity, StyleSheet, BackHandler, ScrollView, TextInput, Dimensions } from 'react-native'
import {registerUser} from '@meFirebase/databaseOperations'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons';
import { async } from '@firebase/util'

export default function RegisterScreen({ navigation }) {
    const [data, setData] = React.useState({
        name: null,
        email:null,
        phone:null,
        username:null,
        password:null,
        confirmPassword:null,
    });
    const [alert, toogleAlert] = React.useState(false);

    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    async function prueba2(){
        await registerUser(data);
    }

    function checkData() {
        var aux = true;
        if (data.name == null || data.name.length == 0) {
            aux = false;
        }
        if (data.email == null || data.email.length == 0) {
            aux = false;
        }
        if (data.phone == null || data.phone.length == 0) {
            aux = false;
        }
        if (data.username == null || data.username.length == 0) {
            aux = false;
        }
        if (data.password == null || data.password.length == 0 || data.password.length < 8) {
            aux = false;
        }
        if (data.password != data.confirmPassword) {
            aux = false;
        }
        if (!aux) {
            toogleAlert(true);
        } else {
            prueba2();
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
                    onChangeText={e => setData({ ...data, name: e })}
                    autoCapitalize="words"
                    style={Styles.Input}
                />
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Correo</Text>
                <TextInput
                    onChangeText={e => setData({ ...data, email: e })}
                    keyboardType="email-address"
                    autoCapitalize='none'

                    style={Styles.Input}
                />
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Numero de telefono</Text>
                <TextInput
                    onChangeText={e => setData({ ...data, phone: e })}
                    keyboardType="number-pad"
                    style={Styles.Input}
                />
                <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Nombre de usuario</Text>
                <TextInput
                    onChangeText={e => setData({ ...data, username: e })}
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
                            <View style={{ alignItems: "center", transform: [{ translateX: 5 }] }}>
                                <Icon style={{ marginBottom: 20 }} name="close-circle-outline" size={150} color="#d50000" />
                            </View>
                            <Text style={{ ...Styles.Text, textAlign: "center", marginBottom: 20 }}>Ha ocurrido un error, revisa los datos e intenta nuevamente</Text>
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
        backgroundColor: "#262626",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});