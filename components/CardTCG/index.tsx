import React, { useState } from "react";
import { View, Image } from "react-native";
import Loader from "../Loader";

import styles from "./styles";

export default function CardTCG(cardImage: any) {
    const [isImageLoading, setIsImageLoading] = useState(true);
    return (
        <View style={styles.card}>
            {isImageLoading && <Loader loader={3} />}
            <Image
                style={styles.img}
                source={
                    cardImage.cardImage !== undefined
                        ? { uri: `${cardImage.cardImage}/high.png` }
                        : require("C:/Work/tcg-collect-mobile/assets/images/pokemonCard.png")
                }
                onLoad={() => setIsImageLoading(false)}
            />
        </View>
    );
}
