// App.js
import React from 'react';
import {Link, NavigationContainer} from '@react-navigation/native';
import {useEffect} from 'react';
import {Linking} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
import AccountScreen from './screens/AccountScreen';
import ProfileScreen from './screens/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account Page"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
          tabBarBadge: null,
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  useEffect(() => {
    Linking.getInitialURL()
      .then(url => {
        console.log('launch url 1', url);
        if (url) {
          // If there is a valid URL, call the _handleOpenUrl function to handle it.
          _handleOpenUrl({url});
        }
      })
      .catch(err => console.error('launch url error', err));

    const handleDeepLink = event => {
      console.log('Deep link received:', event.url);

      // Handle the deep link URL here
    };

    // Add event listener for deep linking
    Linking.addEventListener('url', handleDeepLink);
    // Linking.removeEventListener('url', handleDeepLink);
    // Remove the event listener when the component is unmounted
    // return () => {
    //   Linking.removeEventListener('url', handleDeepLink);
    // };
  }, []);
  _handleOpenUrl = initialUrlSchemeEvent => {
    console.log('handleOpenUrl', initialUrlSchemeEvent.url);
    // It is using the 'window.handleIncomingIntentURL' function and passing the event URL as an argument.
  };
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
