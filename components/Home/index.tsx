import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import Serie from "../Serie";

import styles from "./styles";

const baseUrl = "https://api.tcgdex.net/v2/fr";

interface Navigation {
    navigation: any;
}

export default function Home({ navigation }: any) {
    const [series, setSeries] = useState();
    const [loaded] = useFonts({
        Anton: require("../../assets/fonts/Anton.ttf"),
        PokemonSolid: require("../../assets/fonts/Pokemon-Solid.ttf"),
    });

    const fetchSeries = () => {
        axios
            .get(`${baseUrl}/series`)
            .then((response) => {
                response.data.reverse();
                setSeries(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchSeries();
    }, []);

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
                Series
            </Text>
            <View style={styles.series}>
                <FlatList
                    numColumns={2}
                    data={series}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Serie
                                props={[
                                    item.id,
                                    item.name,
                                    item.logo,
                                    navigation,
                                ]}
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
