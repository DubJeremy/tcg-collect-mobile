import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
    },
    cardsTCG: {
        flex: 1,
        alignItems: "center",
    },
    cards: {
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderTopWidth: 3,
        marginTop: 15,
        width: "90%",
        height: "85%",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: "33%",
        height: 135,
        marginTop: "2.5%",
        marginBottom: "2.5%",
    },
    imgCard: {
        width: "90%",
        height: 135,
        resizeMode: "contain",
    },
});

export default styles;
