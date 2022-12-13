import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

import Serie from "../Serie";

import styles from "./styles";

const baseUrl = "https://api.tcgdex.net/v2/fr";

interface Navigation {
    navigation: any;
}

export default function Home() {
    const [series, setSeries] = useState();

    const fetchSeries = () => {
        axios
            .get(`${baseUrl}/series`)
            .then((response) => {
                response.data.reverse()
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
            <Text style={styles.title}>Series</Text>
            <View style={styles.series}>
                <FlatList
                    numColumns={2}
                    data={series}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Serie props={[item.id, item.name, item.logo]} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}