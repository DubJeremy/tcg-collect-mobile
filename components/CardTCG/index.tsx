import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import axios from "axios";

import styles from "./styles";

const baseUrl = "https://api.tcgdex.net/v2/fr";

export default function CardTCG() {
    const [cardTCG, setCardTCG] = useState<any>([]);

    const fetchCardTCG = () => {
        axios
            .get(`${baseUrl}/cards/swsh3-200`)
            .then((response) => {
                setCardTCG(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchCardTCG();
    }, []);

    return (
        <View style={styles.card}>
            <Image
                style={styles.img}
                source={
                    cardTCG.image !== undefined
                        ? { uri: `${cardTCG.image}/high.png` }
                        : require("C:/Work/tcg-collect-mobile/assets/images/pokemonCard.png")
                }
            />
        </View>
    );
}
