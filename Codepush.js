import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from 'react';
import codePush from "react-native-code-push";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import CodePush from 'react-native-code-push';

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
                    <Text style={{ color: 'black', textAlign: 'center' }}>Check for updates</Text>
                    <Text style={{ color: 'black', textAlign: 'center' }}>Check for updates code push</Text>
                    <Text style={{ color: 'black', textAlign: 'center' }}>Check for updates withoout update</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    main: {

    }
});
App = codePush(codePushOptions)(App)
export default App;

