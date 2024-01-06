import React, {Fragment} from 'react';
import PushController from './PushController';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  PermissionsAndroid,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// Dummy data for list, we'll replace this with data received from push

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log(JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  requestUserPermission();
  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    // console.log(fcmToken);
    if (fcmToken) {
      console.log(fcmToken);
    }
  };
  checkToken();
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  return (
    <View>
      <Text>Hello2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {backgroundColor: Colors.lighter},
  listHeader: {backgroundColor: '#eee', color: '#222', height: 44, padding: 12},
  title: {fontSize: 18, fontWeight: 'bold', paddingTop: 10},
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  engine: {position: 'absolute', right: 0},
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionContainer: {marginTop: 32, paddingHorizontal: 24},
  sectionTitle: {fontSize: 24, fontWeight: '600', color: Colors.black},
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {fontWeight: '700'},
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
