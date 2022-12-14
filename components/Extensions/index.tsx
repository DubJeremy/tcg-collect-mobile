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

import styles from "./styles";

const baseUrl = "https://api.tcgdex.net/v2/fr";

export default function Extension(props: any) {
    const [filteredExtensions, setFilteredExtensions] = useState();

    const serieId: string = props.props[0].serieId;

    const fetchExtensions = () => {
        axios
            .get(`${baseUrl}/sets`)
            .then((response) => {
                response.data.reverse();

                setFilteredExtensions(
                    response.data.filter((item: any) =>
                        item.id.includes(serieId)
                    )
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchExtensions();
    }, []);

    const handlePress = (itemId: string) => {
        const data = { extensionId: itemId };
        props.props[1].navigate("CardsTCG", { data: data });
    };

    return (
        <View style={styles.home}>
            <ImageBackground
                source={require("../../assets/images/backgroundPoke.png")}
                style={styles.backgroundImage}
            />
            <Text style={styles.title}>Extensions</Text>
            <View style={styles.series}>
                <FlatList
                    numColumns={1}
                    data={filteredExtensions}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.card}
                            onPress={() => handlePress(item.id)}
                        >
                            <Image
                                style={styles.logoSerie}
                                source={
                                    item.logo !== undefined
                                        ? { uri: `${item.logo}` }
                                        : require("C:/Work/tcg-collect-mobile/assets/images/pokeballLogo.png")
                                }
                            />
                            {item.symbol && (
                                <Image
                                    style={styles.logoSerie}
                                    source={{ uri: `${item.symbol}` }}
                                />
                            )}
                            <Text>
                                {item.name}, {item.cardCount.official} cartes{" "}
                                {item.cardCount.total -
                                    item.cardCount.official ===
                                0
                                    ? ""
                                    : `+ ${
                                          item.cardCount.total -
                                          item.cardCount.official
                                      } scrètes`}
                            </Text>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
