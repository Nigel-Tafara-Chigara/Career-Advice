import React from 'react';
import { Colors } from './../components/styles'; // Ensure that Colors is correctly imported
const { primary, tertiary } = Colors;

// React Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens

import Home from './../screens/Home';
import Login2 from '../screens/Login2';
import Signup2 from '../screens/Signup2';
import Welcome2 from '../screens/Welcome2';

const Stack = createNativeStackNavigator(); // Use createNativeStackNavigator or createStackNavigator

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: 'transparent' }, // Corrected headerStyle
                    headerTintColor: tertiary, // Correct usage
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                    },
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Login2" component={Login2} />
                <Stack.Screen name="Signup2" component={Signup2} />
                <Stack.Screen name="Home" component={Home} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
