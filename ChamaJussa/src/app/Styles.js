import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#F3F4F6",
        flex: 1,
        paddingTop: 40
    },
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        // borderColor: "transparent",
        // borderStyle: "solid",
        // borderWidth: 3,


    },
    titulo: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 700,
        paddingBottom: 30,

    },
    caixa: {
        backgroundColor: "#fff",
        width: 350,
        // height: 150,
        borderRadius: 10,
        boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.5)',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        flex: 1,
        flexDirection: "row"

    },
    scroll: {
        flex: 1

    },
    tituloChamada: {
        fontSize: 18,
        fontWeight: 700
    },
    Descricoe: {
        opacity: "50%"
    },
    Data: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Textos: {
        width: "85%",
        paddingLeft: 15
    }
});
