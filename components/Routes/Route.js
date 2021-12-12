import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home/Home';
import City from '../Screen/City/City';
import Setting from '../Screen/Setting/Setting';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="City" component={City} />
                <Stack.Screen name="Setting" component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route;
