// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splace from '../screens/Splace';
import Intro from '../screens/Intro';
import SignIn from '../screens/auth/SignIn';
import SignUpp from '../screens/auth/SignUpp';
import Forgot from '../screens/auth/ForgotScreen';
import ForgotScreen from '../screens/auth/ForgotScreen';
import ResetSuccess from '../screens/auth/ResetSuccess';
import Otp from '../screens/auth/Otp';


const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splace' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splace" component={Splace} />
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUpp" component={SignUpp} />
                <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
                <Stack.Screen name="ResetSuccess" component={ResetSuccess} />
                <Stack.Screen name="Otp" component={Otp} />






            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;