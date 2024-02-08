import Listensms from './Listensms';

/*********************   seperate   *************************/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BannerClass from './components/Banner';
import Products from './components/Products';
import CategoryDetail from './screens/CategoryDetail';
import {Component} from 'react';
import codePush from 'react-native-code-push';

import {NativeModules} from 'react-native';

const {VoiceChangingModule} = NativeModules;

import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CodePush from 'react-native-code-push';

const Stack = createNativeStackNavigator();
let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

class App extends Component {
  onButtonPress() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }
  callJavaMethod() {
    alert('hii');
  }
  changeToChild() {
    console.log('changeToChild');
    var audioTrackURL =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    Platform.OS === 'android' &&
      VoiceChangingModule.changeVoiceToChild(audioTrackURL);
  }

  changeVoiceToAlien() {
    console.log('changeToChild');
    var audioTrackURL =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    Platform.OS === 'android' &&
      VoiceChangingModule.changeVoiceToChild(audioTrackURL);
  }

  speedUpVoice() {
    console.log('changeToChild');
    var audioTrackURL =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    Platform.OS === 'android' &&
      VoiceChangingModule.changeVoiceToChild(audioTrackURL);
  }

  slowDownVoice() {
    console.log('changeToChild');
    var audioTrackURL =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    Platform.OS === 'android' &&
      VoiceChangingModule.changeVoiceToChild(audioTrackURL);
  }

  stopRing() {
    var audioTrackURL =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    console.log('stopRing');
    VoiceChangingModule.stopSound();
  }
  justTest() {
    console.log('juatTest');
  }
  render() {
    return (
      <View style={styles.mastyleLoginBtnin}>
        <Listensms />
        <Text>azeem</Text>
        <View style={styles.button}>
          <Button title="change Voice To Alien" onPress={this.justTest} />
        </View>
        {/* <Button title='child voice' onPress={this.changeToChild}/>
            <View style={styles.button}>
              <Button title='changeVoiceToAlien' onPress={this.changeVoiceToAlien} />
            </View>
            <View style={styles.button}>
              <Button title='speedUpVoice' onPress={this.speedUpVoice} />
            </View>
            <View style={styles.button}>
              <Button title='slowDownVoice' onPress={this.slowDownVoice} />
            </View>

            <View style={styles.button}>
              <Button title='stop sound' onPress={this.stopRing} />
            </View>
                <TouchableOpacity onPress={this.onButtonPress}>
                    <Text style={{color:'black', textAlign:'center'}}>Check for updates</Text>
                    <Text style={{color:'black', textAlign:'center'}}>Check for updates code push</Text>
                    <Text style={{color:'black', textAlign:'center'}}>Check for updates withoout update</Text>
                </TouchableOpacity> */}
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
}

const styles = StyleSheet.create({
  mastyleLoginBtnin: {
    padding: 10,
    margin: 10,
    height: 100,
    width: 400,
  },
  button: {
    paddingTop: 10,
  },
});
App = codePush(codePushOptions)(App);
export default App;
