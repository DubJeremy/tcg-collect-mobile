import React, { useState } from "react";
import { Text, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";

import styles from "./styles";

export default function Serie(props: any) {
    const [loaded] = useFonts({
        Anton: require("../../assets/fonts/Anton.ttf"),
    });

    if (!loaded) {
        return null;
    }
    const handlePress = () => {
        const data = { serieId: props.props[0] };
        props.props[3].navigate("Extensions", { data: data });
    };

    return (
        <Pressable style={styles.CardSerie} onPress={() => handlePress()}>
            <Image
                style={styles.logoSerie}
                source={
                    props.props[2] !== undefined
                        ? { uri: `${props.props[2]}` }
                        : require("C:/Work/tcg-collect-mobile/assets/images/pokemonDeck.png")
                }
            />
            <Text
                style={{
                    fontFamily: "Anton",
                    fontSize: 15,
                    color: "#fff",
                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                    textShadowOffset: { width: -2, height: 2 },
                    textShadowRadius: 5,
                    textAlign: "center",
                }}
            >
                {props.props[1]}
            </Text>
        </Pressable>
    );
}
