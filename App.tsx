import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Home from "./components/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./assets/images/backgroundPoke.png")}
                style={styles.backgroundImage}
            />
            <Text style={styles.txt}>TCG Collect</Text>

            <Home />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
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
