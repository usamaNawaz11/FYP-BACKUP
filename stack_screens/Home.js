import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function Home({ navigation }) {
  const Click = () => {
    navigation.navigate("Welcome to Home");
  };
  const Weather = () => {
    navigation.navigate("Welcome to Home");
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "white",
          height: responsiveHeight(8),
          width: responsiveWidth(100),
          marginTop: responsiveFontSize(2),
          borderBottomLeftRadius: responsiveWidth(8),
          borderBottomRightRadius: responsiveWidth(8),
        }}
      >
        <Icon
          style={{ padding: responsiveWidth(3) }}
          name="home"
          size={responsiveWidth(12)}
          color="seagreen"
        ></Icon>
      </View>

      <View style={{height:responsiveHeight(57),width:responsiveWidth(100)}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop:responsiveHeight(8),
          }}
        >
          <TouchableOpacity style={styles.button1} onPress={Click}>
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
                alignSelf: "center",
              }}
              source={require("../assets/crop_medicine.png")}
            ></Image>
            <Text style={styles.text}>Medicines</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={Weather}>
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
                alignSelf: "center",
              }}
              source={require("../assets/cloudy.png")}
            ></Image>
            <Text style={styles.text}>Weather</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.button3} onPress={Click}>
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
                alignSelf: "center",
              }}
              source={require("../assets/crop.png")}
            ></Image>
            <Text style={styles.text}>Crop Disease</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4} onPress={Click}>
            <Image
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
                alignSelf: "center",
              }}npm 
              source={require("../assets/buy.png")}
              
            ></Image>

            <Text style={styles.text}>Buy & Sell</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height:responsiveHeight(35),
          width:responsiveWidth(100),
          borderTopStartRadius: responsiveWidth(10),
          borderTopRightRadius: responsiveWidth(10),
          backgroundColor: "#229265",
          justifyContent: "center",
        }}
      >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "#f3fffa",
    justifyContent: "center",
  },
  button1: {
    height: responsiveHeight(20),
    width: responsiveWidth(45),
    backgroundColor: "white",
    borderTopStartRadius: responsiveWidth(25),
    margin: responsiveWidth(1),
    justifyContent: "center",
  },
  button2: {
    height: responsiveHeight(20),
    width: responsiveWidth(45),
    backgroundColor: "white",
    borderTopRightRadius: responsiveWidth(25),
    margin: responsiveWidth(1),
    justifyContent: "center",
  },
  button3: {
    height: responsiveHeight(20),
    width: responsiveWidth(45),
    backgroundColor: "white",
    borderBottomLeftRadius: responsiveWidth(25),
    margin: responsiveWidth(1),
    justifyContent: "center",
  },
  button4: {
    height: responsiveHeight(20),
    width: responsiveWidth(45),
    backgroundColor: "white",
    borderBottomRightRadius: responsiveWidth(25),
    margin: responsiveWidth(1),
    justifyContent: "center",
  },
  text: {
    fontSize: responsiveFontSize(3),
    color: "black",
    textAlign: "center",
  },
});
