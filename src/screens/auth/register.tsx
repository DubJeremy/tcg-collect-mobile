import React, { useState, useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { REGISTER } from "../../utils/graphql/register";
import { GestureResponderEvent } from "react-native";
import {
    TextInput,
    SafeAreaView,
    StyleSheet,
    View,
    Button,
} from "react-native";

interface Navigation {
    navigation: any;
}

export default function Register(props: Navigation) {
    const [createUser, { loading }] = useMutation(REGISTER, {
        onError: (e) => console.log(e),
        onCompleted(data) {
            if (data.createUser.success) {
                props.navigation.navigate("Login");
            }

            const { success, ...user } = data.createUser;
        },
    });

    useEffect(() => {
        console.log("LOADING", loading);
    }, [loading]);

    const [state, setState] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        profile_picture: "",
    });

    const handleChange = (value: string, name: string) => {
        setState((state) => ({ ...state, [name]: value }));
    };

    const handleSubmit = async (e: GestureResponderEvent) => {
        e.preventDefault();
        const newUser = await createUser({
            variables: {
                input: state,
            },
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Your firstname"
                    onChangeText={(value) => handleChange(value, "firstname")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your lastname"
                    onChangeText={(value) => handleChange(value, "lastname")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your profile picture"
                    onChangeText={(value) =>
                        handleChange(value, "profile_picture")
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your email"
                    onChangeText={(value) => handleChange(value, "email")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your password"
                    secureTextEntry={true}
                    onChangeText={(value) => handleChange(value, "password")}
                />
                <Button onPress={handleSubmit} title="Submit" />
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
