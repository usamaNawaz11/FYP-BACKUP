import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
export default function SignUp({ navigation }) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const SignIN = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("your account has been created");
        navigation.navigate("Welcome to Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const home = () => {
    navigation.navigate("Sign In");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/agricultural.png")}
      ></Image>
      <Text style={styles.text1}>Farmer's Touch</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={(username) => setusername(username)}
        value={username}
        placeholderTextColor={"black"}
        keyboardType="name-phone-pad"
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(email) => setemail(email)}
        value={email}
        placeholderTextColor={"black"}
        keyboardType="email-address"
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(password) => setpassword(password)}
        value={password}
        placeholderTextColor={"black"}
        secureTextEntry={true}
        autoCapitalize="none"
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={SignIN}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              height: responsiveHeight(5),
              width: responsiveWidth(10),
              alignSelf: "flex-start",
            }}
            source={require("../assets/user.png")}
          ></Image>
          <Text style={styles.text2}>Create Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "#f3fffa",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: responsiveHeight(5),
    width: responsiveWidth(30),
    height: responsiveHeight(15),
  },
  text1: {
    fontSize: responsiveFontSize(5),
    fontStyle: "normal",
    color: "seagreen",
  },
  text2: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    paddingLeft: responsiveWidth(4),
  },
  input: {
    marginTop: responsiveHeight(3),
    paddingLeft: responsiveWidth(2),
    height: responsiveHeight(10),
    width: responsiveWidth(90),
    borderBottomWidth: responsiveWidth(0.5),
    borderLeftWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
    borderColor: "#26c485",
    color: "black",
  },
  button: {
    margin: responsiveHeight(3),
    height: responsiveHeight(5),
    width: responsiveWidth(70),
    borderBottomRightRadius: responsiveWidth(90),
    borderRightColor: "#26c485",
    borderRightWidth: responsiveWidth(5),
    borderBottomWidth: responsiveWidth(0.5),
    borderBottomColor: "#26c485",
    backgroundColor: "white",
  },
});
