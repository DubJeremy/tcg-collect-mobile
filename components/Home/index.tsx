import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import axios from "axios";

import Serie from "../Serie";

import styles from "./styles";

const baseUrl = "https://api.tcgdex.net/v2/fr";

export default function Home() {
    const [series, setSeries] = useState();

    const fetchSeriesTitle = () => {
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
        fetchSeriesTitle();
    }, []);

    return (
        <View style={styles.home}>
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
        </View>
    );
}