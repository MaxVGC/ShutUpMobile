import React from 'react'
import { Text, BackHandler, View, ScrollView, TouchableOpacity, StyleSheet, Image, Dimensions, Button, ImageBackground, TextInput,Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Colors } from '@styles/General'
import { LinearGradient } from 'expo-linear-gradient';

const heightImg = Math.trunc((Dimensions.get('window').width) * (0.15));

export default function LoginScreen({ navigation }) {
  const [data, setData] = React.useState({ user: null, password: null });

  function updateData(type, text) {
    if (type == 0) {
      setData({ ...data, user: text })
    } else {
      setData({ ...data, password: text })
    }
  }

  function changeToRegister() {
    navigation.navigate("Register");
  }

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backPressed)
  }, [])

  function backPressed(){
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      { cancelable: false });
      return true;
  }


  return (
    <ScrollView contentContainerStyle={styles.ScrollView}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }}>
        <View style={styles.Logo}>
          <Image
            style={{ width: "15%", height: heightImg, marginBottom: 20, resizeMode: "contain" }}
            source={require('@resources/icon.png')}
          />
          <Text style={{ color: "#fff", fontSize: 34 }}>Inicia sesión</Text>
        </View>
        <View style={styles.Form}>
          <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>ShutId o Numero de telefono</Text>
          <TextInput
            onChangeText={e => updateData(0, e)}
            style={styles.Input}
          />
          <Text style={{ color: "#fff", opacity: 0.7, marginBottom: 10 }}>Contraseña</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={e => updateData(1, e)}
            style={styles.Input}
          />
        </View>
        <TouchableOpacity onPress={() => { console.log(data) }}>
          <LinearGradient
            colors={[Colors.Azul_1, Colors.Azul_2]}
            style={styles.Button}
          >
            <Text style={styles.text}>¡Vamos!</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.text}>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => { changeToRegister(), console.log("cambie") }}>
          <Text style={{ ...styles.text, color: Colors.Azul_1 }}>Registrate aqui</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: '#121212',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20
  }
  ,
  ScrollView: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    position: "relative",
    backgroundColor: '#121212',

  },
  Logo: {
    width: "100%",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  Form: {
    width: "100%",
    paddingHorizontal: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 40
  },
  Input: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.Azul_2,
    marginBottom: 20,
    paddingBottom: 5,
  }
});

