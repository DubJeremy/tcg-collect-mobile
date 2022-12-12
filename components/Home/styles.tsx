import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    home: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    title: {
        fontWeight: "400",
        fontSize: 35,
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 5,
    },
    series: {
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderTopWidth:4,
        borderBottomWidth:4,
        marginTop: 25,
        width: "80%",
        height: "80%",
        justifyContent: "flex-end",
        alignItems: "center",
    
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: 120,
        marginTop: "5%",
    },
});

export default styles;
