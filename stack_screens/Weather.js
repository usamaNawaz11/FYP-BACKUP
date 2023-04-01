import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const API_KEY = "70a3691440d7a3879d19ffd884e89bfa";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    fetch(API_URL.replace("{CITY_NAME}", "Attock")) // Replace with your desired city name
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!weatherData) {
    return <Text>Loading...</Text>;
  }

  const temperature = Math.round(weatherData.temp - 273.15); // Convert from Kelvin to Celsius
  const weatherDescription = weatherData.weather.description;
  const cityName = weatherData.name;

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{cityName}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.weatherDescription}>{weatherDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 32,
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 16,
  },
  weatherDescription: {
    fontSize: 24,
  },
});

export default Weather;
