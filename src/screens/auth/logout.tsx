import React, { useState, useEffect } from "react";
import { useLogoutLazyQuery } from "../../generated/graphql";
import { GestureResponderEvent } from "react-native";
import {
    TextInput,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { LOGIN } from "../../utils/graphql/login";
import useAuthMethods from "../../hooks/useAuthMethods";

interface Navigation {
    navigation: any;
}

export default function Logout(props: Navigation) {
    const authMethods = useAuthMethods();

    // const [logout, { loading }] = useLogoutLazyQuery({
    //     onError: (e) => console.log("ERREURRRR", e),
    //     onCompleted: async (data) => {
    //         if (data.logout && data.logout.success) {
    //             await SecureStore.setItemAsync("userLogged", "false");
    //             authMethods.logout(false);
    //         }
    //     },
    // });

    const handleLogout = async (e: GestureResponderEvent) => {
        e.preventDefault();
        await SecureStore.deleteItemAsync("token");
        authMethods.logout();
    };

    const handleNotLogout = async (e: GestureResponderEvent) => {
        e.preventDefault();
        props.navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text>Êtes vous sur de vouloir vous déconnecter ?</Text>
            <Button onPress={handleLogout} title="Oui" />
            <Button onPress={handleNotLogout} title="Non" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: "center",
    },
    input: {
        height: 40,
        marginBottom: 30,
        marginHorizontal: 20,
        borderWidth: 1,
        padding: 10,
    },
});
