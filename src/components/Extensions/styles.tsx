import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
    },
    screen: {
        flex: 1,
        alignItems: "center",
    },
    extensions: {
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderTopWidth: 3,
        marginTop: 15,
        width: "80%",
        height: "85%",
    },
    extension: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        width: "100%",
        height: 120,
        marginTop: "2.5%",
        marginBottom: "2.5%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    logoSerie: {
        width: 400,
        height: 70,
        resizeMode: "contain",
        marginTop: 10,
    },
    symbolSerie: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        position: "absolute",
        right: 10,
        top: 10,
    },
    desc: {
        position: "absolute",
        right: 5,
        bottom: 5,
        width: "19%",
    },
});

export default styles;
