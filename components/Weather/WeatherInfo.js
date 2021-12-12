import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Weatherinfo = ({weather}) => {
    const {base} = weather;
    // console.log(weather);
    // const {temp, temp_min, temp_max, pressure, humidity} = weather.main;
    return (
        <View>
            <Text style={styles.text}>{base}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Weatherinfo;
