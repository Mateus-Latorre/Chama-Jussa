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
        width: 368,
        height: 347,
        boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        marginTop: 49,
        justifyContent: "center",
        alignItems: "center",
    },
    texto: {
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
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
        height: 50,
        width: 368,
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
