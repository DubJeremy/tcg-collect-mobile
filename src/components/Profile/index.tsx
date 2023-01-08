import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";

export default function Profile({ navigation }: any) {
    return (
        <View style={styles.profile}>
            <ImageBackground
                source={require("../../../assets/images/backgroundPoke.png")}
                style={styles.backgroundImage}
            />
            <Text style={styles.title}>Profile</Text>
            <View style={styles.container}></View>
        </View>
    );
}
