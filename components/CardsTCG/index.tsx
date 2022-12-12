import React from "react";
import { View } from "react-native";

import styles from "./styles";

export default async function CardsTCG(props: any) {
    if (props === null) {
        return (
            <View style={styles.loader}>
                <View style={styles.loaderTxt}>Chargement ... </View>
            </View>
        );
    }
    return (
        <View style={styles.cards}>
        </View>
    );
}
