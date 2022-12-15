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
import { useFonts } from "expo-font";

import styles from "./styles";

const baseUrl = "https://api.tcgdex.net/v2/fr";

export default function Extension(props: any) {
    const [filteredExtensions, setFilteredExtensions] = useState();
    const [loaded] = useFonts({
        Anton: require("../../assets/fonts/Anton.ttf"),
        PokemonSolid: require("../../assets/fonts/Pokemon-Solid.ttf"),
    });

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
            <Text
                style={{
                    flex: 2,
                    textAlignVertical: "bottom",
                    fontWeight: "400",
                    fontSize: 35,
                    color: "#ffcb05",
                    textShadowColor: "#2a75bb",
                    textShadowOffset: { width: -4, height: 4 },
                    textShadowRadius: 1,
                    fontFamily: "PokemonSolid",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                Extensions
            </Text>
            <View style={styles.extensions}>
                <FlatList
                    numColumns={1}
                    data={filteredExtensions}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.extension}
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
                                    style={styles.symbolSerie}
                                    source={{ uri: `${item.symbol}` }}
                                />
                            )}
                            <Text
                                style={{
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    marginTop: 10,
                                    fontFamily: "Anton",
                                    fontSize: 15,
                                    color: "#fff",
                                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                                    textShadowOffset: {
                                        width: -2,
                                        height: 2,
                                    },
                                    textShadowRadius: 5,
                                    textAlign: "center",
                                    width: "60%",
                                }}
                            >
                                {item.name}
                            </Text>
                            <View style={styles.desc}>
                                <Text
                                    style={{
                                        fontFamily: "Anton",
                                        fontSize: 11,
                                        color: "#fff",
                                        textShadowColor: "rgba(0, 0, 0, 0.75)",
                                        textShadowOffset: {
                                            width: -2,
                                            height: 2,
                                        },
                                        textShadowRadius: 5,
                                        textAlign: "right",
                                        lineHeight: 20,
                                    }}
                                >
                                    {item.cardCount.official} cartes{" "}
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Anton",
                                        fontSize: 10,
                                        color: "#fff",
                                        textShadowColor: "rgba(0, 0, 0, 0.75)",
                                        textShadowOffset: {
                                            width: -2,
                                            height: 2,
                                        },
                                        textShadowRadius: 5,
                                        textAlign: "right",
                                        lineHeight: 12,
                                    }}
                                >
                                    {item.cardCount.total -
                                        item.cardCount.official ===
                                    0
                                        ? ""
                                        : `+${
                                              item.cardCount.total -
                                              item.cardCount.official
                                          } secrètes`}
                                </Text>
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
