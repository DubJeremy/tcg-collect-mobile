import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function Home() {
    return (
        <View style={styles.home}>
            <Text style={styles.title}>All Series</Text>
            <View style={styles.series}></View>
        </View>
    );
}
