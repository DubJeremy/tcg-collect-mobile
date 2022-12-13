import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
    },
    home: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        flex: 2,
        textAlignVertical: "bottom",
        fontWeight: "400",
        fontSize: 35,
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 5,
    },
    series: {
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderTopWidth: 3,
        marginTop: 20,
        width: "80%",
        height: "85%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: 120,
        marginTop: "2.5%",
        marginBottom: "2.5%",
    },
});

export default styles;
