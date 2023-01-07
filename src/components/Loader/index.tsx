import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

export default function Loader({ loader }: { loader: number }) {
    let loaderPath = require("../../../assets/images/Loaders/loaderMew.gif");
    switch (loader) {
        case 1:
            loaderPath = require("../../../assets/images/Loaders/loaderMew.gif");
            break;
        case 2:
            loaderPath = require("../../../assets/images/Loaders/loaderKanto.gif");
            break;
        case 3:
            loaderPath = require("../../../assets/images/Loaders/loaderSpectre.gif");
            break;
        case 4:
            loaderPath = require("../../../assets/images/Loaders/loaderCarapuce.gif");
            break;
    }

    return (
        <View
            style={
                loader === 1
                    ? styles.loaderContainer1
                    : loader === 2
                    ? styles.loaderContainer2
                    : loader === 3
                    ? styles.loaderContainer3
                    : styles.loaderContainer4
            }
        >
            <Image
                source={loaderPath}
                style={
                    loader === 1
                        ? styles.loader1
                        : loader === 2
                        ? styles.loader2
                        : loader === 3
                        ? styles.loader3
                        : styles.loader4
                }
            />
        </View>
    );
}
