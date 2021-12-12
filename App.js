import React from 'react';
import { View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Route from './components/Routes/Route';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <Route />
      </View>
    </SafeAreaView>
  );
}
