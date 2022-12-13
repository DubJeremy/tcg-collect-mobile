import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import ExtensionsScreen from "./screens/ExtensionsScreen";
import CardsTCGScreen from "./screens/CardsTCGScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="CardsTCG"
                >
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'TCG Collect' }}
                    />
                    <Stack.Screen
                        name="Extensions"
                        component={ExtensionsScreen}
                    />
                    <Stack.Screen
                        name="CardsTCG"
                        component={CardsTCGScreen}
                    />
                    {/* <Stack.Screen
                        name="Profile"
                        component={Profile}
                    /> */}
                </Stack.Navigator>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    txt: {
        paddingTop: 60,
        fontWeight: "700",
        fontSize: 45,
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 5,
    },
});
