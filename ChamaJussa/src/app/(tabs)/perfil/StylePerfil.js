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
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#F3F4F6",
        // borderColor: "transparent",
        // borderStyle: "solid",
        // borderWidth: 3,
        paddingLeft: 30,
        paddingRight: 30,



    },
    formulario: {
        backgroundColor: "#fff",
        width: "99%",
        height: 347,
        borderRadius: 10,
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.5)',
        // marginLeft: 15,
        // marginRight: 15,
        marginBottom: 30,
        // justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    texto: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 700,
        paddingBottom: 30,

    },
    textoNome: {
        marginTop: 40,
        flexDirection: "column",
        fontWeight: "bold",
        fontSize: 25,
    },
    textoEmail: {
        flexDirection: "column",
        fontWeight: "light",
        opacity: 0.5,
        marginTop: 10,
    },
    imagem: {
        marginTop: 50,
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        marginTop: 40,
        height: 50,
        width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EF4444",
        boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.5)',
        paddingLeft: 30,
        paddingRight: 30,
    },
    txtbtn: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
    }
}
);
