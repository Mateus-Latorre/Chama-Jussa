import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#F5F5F5",
        flex: 1,
        // paddingTop: 40
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
    formulario: {
        backgroundColor: "#fff",
        width: "75%",
        height: "80%",
        borderRadius: 10,
        boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.5)',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 30,
        // justifyContent: "center",
        alignItems: "center",
        // paddingBottom: ,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,     
        flex: 1,
        flexDirection: "column"

    },
    titulo: {
        fontSize: 24,
        fontWeight: 700,

    },
    texto: {
        opacity: 0.5,
        fontSize: 16,
        textAlign: "center"

    },
    pedidoCaixa: {
        fontWeight: 600,
        fontSize: 16,

    },
    input: {
        backgroundColor:"#f3f4f6",
        width: "100%",
        height: 45,
        borderRadius: 5,
        borderColor: "#e0e1e3",
        borderWidth: 1,
        padding: 10,
        marginTop: 8,
        marginBottom: 8

        
    },
    inputs: {
        width: "100%",
        marginTop:30
                

    },
    botao: {
        width: "100%",
        backgroundColor: "#10b981",
        height: 50,
        borderRadius: 5,
        boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.5)',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 21


    },
    textobtn: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 700
    },
    azul: {
      flexDirection: "row",
        backgroundColor:"#234567"
    }
});
