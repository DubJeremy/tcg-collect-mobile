import React, { useEffect, useState, useCallback } from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Serie from "../Serie";
import Loader from "../Loader";

import styles from "./styles";

const baseUrl = "https://api.tcgdex.net/v2/fr";
SplashScreen.preventAutoHideAsync();

export default function Home({ navigation }: any) {
    const [series, setSeries] = useState();
    const [loading, setLoading] = useState(true);

    const [fontsLoaded] = useFonts({
        PokemonSolid: require("../../assets/fonts/Pokemon-Solid.ttf"),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }

    const fetchSeries = () => {
        axios
            .get(`${baseUrl}/series`)
            .then((response) => {
                response.data.reverse();
                setSeries(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchSeries();
    }, []);

    return (
        <View style={styles.home} onLayout={onLayoutRootView}>
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
                {loading ? (
                    <Loader loader={1} />
                ) : (
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
                )}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
