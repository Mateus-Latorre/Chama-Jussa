import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#F3F4F6",
        flex: 1,
        height: "100%",
        width: "100%",
        paddingTop: 40
    },
    container: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#F3F4F6",
        // borderColor: "transparent",
        // borderStyle: "solid",
        // borderWidth: 3,


    },
    headerOS: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btnOS: {
        width: 107,
        height: 44,
        backgroundColor: "#007AFF",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 30,

    },
    caixaOs: {
        marginTop: 10
    },
    txtBtn: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white"
    },
    container2: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 10,
        marginBottom: 15,

    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

    },
    subsubtitulo: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 700,
        paddingBottom: 30,
    },
    titulo: {
        fontSize: 20,
        // opacity: 0.50,
        fontWeight: 15,
    },
    caixa: {
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 10,
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.5)',
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "row",
        paddingTop: 23,
        paddingBottom: 18

    },
    scroll: {
        flex: 1,


    },
    tituloAzul: {
        paddingBottom: 20,
        fontSize: 18,
        fontWeight: 700,
        color: "#006fff"
    },
    tituloSub: {
        paddingBottom: 9,
        fontSize: 18,
        fontWeight: 700
    },
    Descricoe: {
        opacity: 0.5,
        fontSize: 16
    },
    Data: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Textos: {
        width: "85%",
        paddingLeft: 15
    },
    textoBox: {
        marginLeft: 20,
        alignItems: "flex-start",

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
    },
    texto: {
        opacity: 0.5,
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    textoAtivo: {
        color: '#fff',
        opacity: 1,
        // fontWeight: 'bold',
    },
    botaoOS: {

    }
});
