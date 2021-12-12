import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text, ImageBackground, ScrollView, Image } from "react-native";
import { AntDesign, MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import moment from 'moment';
import CircularProgress from 'react-native-circular-progress-indicator';



const api_key = "3e4a8a4046d4251918384652a3034793";
const image = { uri: "https://images.pexels.com/photos/3375674/pexels-photo-3375674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };
const Home = ({ navigation }) => {
  const [weather, setWeather] = useState([]);
  const celsius = Math.ceil(weather?.main?.temp);
  const fahrenheit = Math.ceil((celsius * 9) / 5 + 32);
  const { name } = weather;
  const country = weather?.sys?.country;
  const max = Math.ceil(weather?.main?.temp_max);
  const min = Math.floor(weather?.main?.temp_min);
  const humidity = weather?.main?.humidity;
  // const icon = weather?.weather[0]?.icon;
  // const description = weather?.weather[0]?.description;
  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Dhaka&APPID=${api_key}&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data))
  }, []);
  return (

    <ScrollView>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.nav}>
          <MaterialCommunityIcons name="home-city" size={28} color="white" />
          <AntDesign name="menufold" size={28} color="white" />
        </View>
        <View style={styles.container} >
          {/* <Image source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }} style={styles.icon} /> */}
          <View style={styles.mid}>
            <View>
              <Text style={styles.date}>{moment().format('LTS')}</Text>
              <Text style={styles.time}>{moment().format('dddd, D MMMM')}</Text>
              <Text style={styles.city}>{name},{country}<EvilIcons name="location" size={24} color="white" /></Text>
            </View>
            <View style={styles.versicleLine}></View>
            <View>
              <Text style={styles.temp}>{celsius}°C</Text>
              <Text style={styles.temp}>{max} / {min}</Text>
              {/* <Text style={styles.description}>{description}</Text> */}
            </View>
          </View>
        </View>
        <CircularProgress
          value={60}
          radius={120}
          duration={2000}
          textColor={'#ecf0f1'}
        />

        <ScrollView horizontal={true}>

        </ScrollView>
      </ImageBackground>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
  },
  description: {
    fontSize: 35,
    color: "white",
    textAlign: "center",
  },
  image: {
    height: 650,
    width: '100%',
  },
  temp: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  time: {
    fontSize: 20,
    color: 'white',

  },
  date: {
    fontSize: 35,
    color: 'white',
  },
  city: {
    fontSize: 20,
    color: 'white',
    textAlign: 'right'
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 50,
  },
  nav: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15
  },
  versicleLine: {
    marginHorizontal: 10,
    height: 100,
    width: 1,
    backgroundColor: '#fff',
  },
  mid: {
    flexDirection: 'row'
  }
})

export default Home;
