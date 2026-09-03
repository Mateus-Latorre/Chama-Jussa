import { StyleSheet } from "react-native";
import { jussaContext } from "../../../Context/jussaContext";


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
        paddingLeft: 30,
        paddingRight: 30,



    },
    caixa: {
        backgroundColor: "#fff",
        width: "99%",
        // height: 150,
        borderRadius: 10,
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.5)',
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30,
        // justifyContent: "center",
        // alignItems: "center",
        padding: 15,
        flex: 1,
        flexDirection: "column",
        paddingTop: 50

    },
    titulo: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 700,
        paddingBottom: 30,

    },
    titulochamada: {
        // textAlign: "center",
        fontSize: 16,
        fontWeight: 700,
        paddingBottom: 11,

    },
    btn: {
        width: "100%",
        backgroundColor: "#10b981",
        height: 50,
        borderRadius: 5,
        boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.5)',
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 30


    },
    textobtn: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 700
    },
    input: {
        backgroundColor: "#f3f4f6",
        width: "100%",
        height: 40,
        borderRadius: 5,
        borderColor: "#e0e1e3",
        borderWidth: 1,
        paddingTop: 10,
        paddingLeft: 16,
        // marginTop: 8,
        marginBottom: 8,
    },
    texto: {
        opacity: 0.5,
        fontSize: 16,
        textAlign: "center"

    },
    inputMaior: {
        height: 100,
        textAlignVertical: "top",
    },
    botao: {
        marginLeft: 4,
        marginBottom: 6,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: "#e0e1e3",
        borderWidth: 1,
        height: 30

    },
    botaoAtivo: {
        backgroundColor: '#007AFF',
    }
});
