import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

export default function CardTCG(cardImage: any) {
    return (
        <View style={styles.card}>
            <Image
                style={styles.img}
                source={
                    cardImage.cardImage !== undefined
                        ? { uri: `${cardImage.cardImage}/high.png` }
                        : require("C:/Work/tcg-collect-mobile/assets/images/pokemonCard.png")
                }
            />
        </View>
    );
}
