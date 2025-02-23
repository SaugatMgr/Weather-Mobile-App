import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { fetchWeather } from '../api/weatherApi';
import styles from '../styles/styles';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserLocation = async () => {
    try {
      const response = await axios.get('https://ipinfo.io/json');
      const userCity = response.data.city;
      setCity(userCity);
    } catch (err) {
      setError('Failed to fetch location');
    }
  };

  const getWeatherData = useCallback(async () => {
    setLoading(true);
    setError(null);

    const data = await fetchWeather(city);
    if (data.error) {
      setError(data.error);
    } else {
      setWeather(data);
    }

    setLoading(false);
  }, [city]);

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (city) {
      getWeatherData();
    }
  }, [city, getWeatherData]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Weather App</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter city name"
            value={city}
            onChangeText={(text) => setCity(text)}
        />
        <Button title="Search" onPress={getWeatherData} />

        {loading ? (
            <ActivityIndicator size="large" color="#007bff" />
        ) : error ? (
            <Text style={styles.errorText}>{error}</Text>
        ) : (
            weather && (
            <View style={styles.weatherBox}>
                <Text style={styles.city}>{weather.city}</Text>
                <Text style={styles.temp}>{weather.temp}</Text>
                <Text style={styles.feelsLikeText}>Feels Like: {weather.feels_like}</Text>
                <View style={styles.detailsRow}>
                <Text style={styles.minTemp}>Min: {weather.temp_min}</Text>
                <Text style={styles.maxTemp}> | Max: {weather.temp_max}</Text>
                </View>
            </View>
            )
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
