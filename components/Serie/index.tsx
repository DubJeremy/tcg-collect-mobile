import React from "react";
import { Text, Pressable, Image } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

export default function Serie(props: any) {
    const [loaded] = useFonts({
        Anton: require("../../assets/fonts/Anton.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <Pressable
            style={styles.CardSerie}
            onPress={() => {
                console.log("youhou");
            }}
        >
            <Image
                style={styles.logoSerie}
                source={
                    props.props[2] !== undefined
                        ? { uri: `${props.props[2]}` }
                        : require("C:/Work/tcg-collect-mobile/assets/images/pokemonCard.png")
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
