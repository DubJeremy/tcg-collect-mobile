import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainStackNavigator from "./Navigator/MainStackNavigator";
import ProfileStackNavigator from "./Navigator/ProfileStackNavigator";
import ExchangePlaceStackNavigator from "./Navigator/ExchangePlaceStackNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
    //TODO notification
    let ProfileNotif = undefined;
    let HomeNotif = undefined;
    let ExchangeNotif = undefined;

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: { backgroundColor: "black", height: "8%" },
                    initialRouteName: "MainStackNavigator",
                    tabBarIcon: ({ focused }) => {
                        let pathIcon = "";

                        if (route.name === "ExchangePlaceStackNavigator") {
                            pathIcon = focused
                                ? require("C:/Work/tcg-collect-mobile/assets/images/icons/ExchangePlaceSelected.png")
                                : require("C:/Work/tcg-collect-mobile/assets/images/icons/ExchangePlace.png");
                        } else if (route.name === "MainStackNavigator") {
                            pathIcon = focused
                                ? require("C:/Work/tcg-collect-mobile/assets/images/icons/HomeSelected.png")
                                : require("C:/Work/tcg-collect-mobile/assets/images/icons/Home.png");
                        } else if (route.name === "ProfileStackNavigator") {
                            pathIcon = focused
                                ? require("C:/Work/tcg-collect-mobile/assets/images/icons/ProfileSelected.png")
                                : require("C:/Work/tcg-collect-mobile/assets/images/icons/Profile.png");
                        }

                        return (
                            <Image
                                style={
                                    route.name === "ExchangePlaceStackNavigator"
                                        ? styles.exchangePlace
                                        : route.name === "MainStackNavigator"
                                        ? styles.home
                                        : styles.profile
                                }
                                source={pathIcon}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen
                    name="ExchangePlaceStackNavigator"
                    component={ExchangePlaceStackNavigator}
                    options={{
                        title: "ExchangePlaceStackNavigator",
                        unmountOnBlur: true,
                        tabBarBadge: ExchangeNotif,
                        tabBarShowLabel: false,
                    }}
                />
                <Tab.Screen
                    name="MainStackNavigator"
                    component={MainStackNavigator}
                    options={{
                        title: "MainStackNavigator",
                        unmountOnBlur: true,
                        tabBarBadge: HomeNotif,
                        tabBarShowLabel: false,
                    }}
                />
                <Tab.Screen
                    name="ProfileStackNavigator"
                    component={ProfileStackNavigator}
                    options={{
                        title: "ProfileStackNavigator",
                        unmountOnBlur: true,
                        tabBarBadge: ProfileNotif,
                        tabBarShowLabel: false,
                    }}
                />
            </Tab.Navigator>
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
    exchangePlace: {
        // flex: 1,
        height: "80%",
        width: "38%",
    },
    home: {},
    profile: {
        height: "85%",
        width: "28%",
    },
});
