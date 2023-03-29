import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BannerClass from './components/Banner';
import Products from './components/Products';
import CategoryDetail from './screens/CategoryDetail';
import { Component } from 'react';
import codePush from "react-native-code-push";

import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import CodePush from 'react-native-code-push';

const Stack = createNativeStackNavigator();
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class App extends Component {
  onButtonPress() {
    codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
    });
}
  render() {
    return (
            <View>
                <TouchableOpacity onPress={this.onButtonPress}>
                    <Text style={{color:'black', textAlign:'center'}}>Check for updates</Text>
                    <Text style={{color:'black', textAlign:'center'}}>Check for updates code push</Text>
                    <Text style={{color:'black', textAlign:'center'}}>Check for updates withoout update</Text>
                </TouchableOpacity>
            </View>
           
    //  <SafeAreaView style={{flex:1, backgroundColor:'hite'}}>
    //  <NavigationContainer>
    //   <Stack.Navigator initialRouteName="BannerClass">
    //     <Stack.Screen name="BannerClass" component={BannerClass} />
    //     <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    //   </Stack.Navigator>
     
    // </NavigationContainer>
    //  </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
 main:{
  
 }
});
App = codePush(codePushOptions)(App)
export default App;

