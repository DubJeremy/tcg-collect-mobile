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

import CardTCG from "../CardTCG";

import styles from "./styles";
import Loader from "../Loader";

const baseUrl = "https://api.tcgdex.net/v2/fr";

export default function CardsTCG(props: any) {
    const [cardsTCG, setCardsTCG] = useState();
    const [cardImage, setCardImage] = useState<string>();
    const [zoom, setZoom] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const [loaded] = useFonts({
        PokemonSolid: require("../../assets/fonts/Pokemon-Solid.ttf"),
    });
    // if (!loaded) {
    //     return null;
    // }

    const extensionId = props.props.extensionId;

    const fetchCardsTCG = () => {
        axios
            .get(`${baseUrl}/sets/${extensionId}`)
            .then((response) => {
                setCardsTCG(response.data.cards);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchCardsTCG();
    }, []);

    const handlePress = () => {
        setZoom(!zoom);
    };

    return (
        <View style={styles.cardsTCG}>
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
                Cards
            </Text>
            {zoom ? (
                <Pressable style={styles.cards} onPress={() => handlePress()}>
                    <CardTCG cardImage={cardImage} />
                </Pressable>
            ) : (
                <View style={styles.cards}>
                    {loading ? (
                        <Loader loader={1} />
                    ) : (
                        <FlatList
                            numColumns={3}
                            data={cardsTCG}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={styles.card}
                                    onPress={() => {
                                        handlePress();
                                        setCardImage(item.image);
                                    }}
                                >
                                    {isImageLoading && <Loader loader={3} />}
                                    <Image
                                        style={styles.imgCard}
                                        source={
                                            item.image !== undefined
                                                ? {
                                                      uri: `${item.image}/high.png`,
                                                  }
                                                : require("C:/Work/tcg-collect-mobile/assets/images/pokeballLogo.png")
                                        }
                                        onLoad={() => setIsImageLoading(false)}
                                    />
                                </Pressable>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    )}
                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
}
