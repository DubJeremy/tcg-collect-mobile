import React, { useState, useEffect } from "react";
import { useLoginLazyQuery } from "../../generated/graphql";
import { GestureResponderEvent } from "react-native";
import {
    TextInput,
    SafeAreaView,
    StyleSheet,
    View,
    Button,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import useAuthMethods from "../../hooks/useAuthMethods";

interface Navigation {
    navigation: any;
}

export default function Login(props: Navigation) {
    const authMethods = useAuthMethods();

    const [login, { loading }] = useLoginLazyQuery({
        onError: (e) => console.log("ERREURRRR", e),
        onCompleted: async (data) => {
            console.log("Data", data);
            if (data.login?.success && data.login.token) {
                await SecureStore.setItemAsync("token", data.login.token);
                let test = await SecureStore.getItemAsync("token");
                authMethods.login(data.login.success);
                //     // props.navigation.navigate("Home");
            }
        },
    });

    useEffect(() => {
        console.log("LOADING", loading);
    }, [loading]);

    const [state, setState] = useState({
        email: "jo@gmail.com",
        password: "fffffffff",
    });

    const handleChange = (value: string, name: string) => {
        setState((state) => ({ ...state, [name]: value }));
    };

    const handleSubmit = async (e: GestureResponderEvent) => {
        e.preventDefault();
        login({
            variables: {
                loginUserInput: state,
            },
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Your email"
                    onChangeText={(value) => handleChange(value, "email")}
                    value={state.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your password"
                    secureTextEntry={true}
                    onChangeText={(value) => handleChange(value, "password")}
                    value={state.password}
                />
                <Button onPress={handleSubmit} title="Submit" />
                <Button
                    title="Register"
                    onPress={() => props.navigation.navigate("Register")}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
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
