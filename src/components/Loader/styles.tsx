import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loaderContainer1: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
        top: "-10%",
    },
    loaderContainer2: {
        width: 400,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
        top: 10,
    },
    loaderContainer3: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
    },
    loaderContainer4: {
        width: "100%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
        top: 5,
    },
    loader1: {
        height: "25%",
        width: "50%",
    },
    loader2: {
        height: "80%",
        width: "30%",
    },
    loader3: {
        height: "70%",
        width: "90%",
    },
    loader4: {
        height: "100%",
        width: "50%",
    },
});

export default styles;
