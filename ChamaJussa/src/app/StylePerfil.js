import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#F5F5F5",
        flex: 1,
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


    
    },
    formulario: {
        width: 325,
        height: 325,
        boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    texto: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "flex-start",
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 25,
        marginLeft: 30,
    },
    textoNome: {
        flexDirection: "column",
        fontWeight: "bold",
        fontSize: 25,
    },
    textoEmail: {
        flexDirection: "column",
        fontWeight: "light",
        color: "#9B9B9B",
        marginTop: 10,
    },
    imagem: {
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        marginTop: 30,
        height: 35,
        width: 325,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#EF4444",
        boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.5)',
    },
    txtbtn: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
    }
}
);
