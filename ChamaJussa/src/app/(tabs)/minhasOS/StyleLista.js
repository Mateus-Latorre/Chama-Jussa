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
        borderRadius: 5,
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
        height: 174,
        width: "90%",
        borderRadius: 10,
        boxShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)',
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "row",
        paddingTop: 23,
        paddingBottom: 18,
        paddingRight: 13,
        paddingLeft: 13,
        marginBottom: 27,
        marginHorizontal:"auto"

    },
    scroll: {
        flex: 1,
        borderRadius: 5,
        width:"100%"

    },
    tituloAzul: {
        paddingBottom: 20,
        fontSize: 18,
        fontWeight: 700,
        width: 150,
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
        width: "90%",
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
        height: 27

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
    status: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    Aberta: {
        backgroundColor: '#DCEAFF',
        height: 27, 
        color: '#2583F7',
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 12,
        borderRadius: 10,

    },
    Andamento: {
        backgroundColor: '#C3E58B',
        height: 27, 
        color: '#188d00',
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 12,
        borderRadius: 10,

    },
    Finalizado: {
        backgroundColor: '#E5A88B',
        height: 27, 
        color: '#8d2d00',
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 12,
        borderRadius: 10,

    },
});
