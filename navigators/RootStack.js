import React from 'react';
import { Colors } from './../components/styles'; // Ensure that Colors is correctly imported
const { primary, tertiary } = Colors;

// React Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Welcome2 from './../screens/Welcome2';
import Home from './../screens/Home';

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
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    options={{ headerTintColor: primary }} // This overrides headerTintColor for this screen
                    name="Welcome"
                    component={Welcome}
                />

                <Stack.Screen
                    options={{ headerTintColor: primary }} // This overrides headerTintColor for this screen
                    name="Welcome2"
                    component={Welcome2}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
