import React, { useEffect, useState } from "react";
import {
    FlatList,
    ImageBackground,
    Text,
    View,
    Image,
    Pressable,
} from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

import CardTCG from "../CardTCG";

import styles from "./styles";

const baseUrl = "https://api.tcgdex.net/v2/fr";

export default function CardsTCG(props: any) {
    const [cardsTCG, setCardsTCG] = useState();
    const [zoom, setZoom] = useState(true);

    const fetchCardsTCG = () => {
        axios
            .get(`${baseUrl}/sets/swsh10`)
            .then((response) => {
                setCardsTCG(response.data.cards);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchCardsTCG();
    }, []);

    const handleClick = () => {
        setZoom(!zoom);
    };

    return (
        <View style={styles.cardsTCG}>
            <ImageBackground
                source={require("../../assets/images/backgroundPoke.png")}
                style={styles.backgroundImage}
            />
            <Text style={styles.title}>Cards</Text>
            {zoom ? (
                <Pressable style={styles.cards} onPress={() => handleClick()}>
                    <CardTCG />
                </Pressable>
            ) : (
                <View style={styles.cards}>
                    <FlatList
                        numColumns={3}
                        data={cardsTCG}
                        renderItem={({ item }) => (
                            <Pressable
                                style={styles.card}
                                onPress={() => {
                                    console.log("youhou");
                                }}
                            >
                                <Image
                                    style={styles.imgCard}
                                    source={
                                        item.image !== undefined
                                            ? { uri: `${item.image}/high.png` }
                                            : require("C:/Work/tcg-collect-mobile/assets/images/pokeballLogo.png")
                                    }
                                />
                            </Pressable>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
}
