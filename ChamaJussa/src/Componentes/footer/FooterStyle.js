import { StyleSheet } from "react-native";

export const FooterStyle = StyleSheet.create({
    cardMenu: {
        width: "100%",
        height: 100,
        paddingTop: 22,
        backgroundColor: "#fff"

    },
    card: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        height: 100,
        alignItems: "center",
        justifyContent: "space-around",

    },
    cardButtonImage: {
        marginLeft: 20
    },
    texto: {
        opacity: 0.5,
        fontSize: 15,
        fontWeight: 500,
    }
})