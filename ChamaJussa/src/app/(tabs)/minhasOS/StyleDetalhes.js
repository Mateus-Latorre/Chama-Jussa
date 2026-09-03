import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F3F4F6",
  },
  titulo: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 30,
  },
  formulario: {
    width: 368,
    paddingBottom: 25, // Substituído a altura fixa por padding inferior
    // Sombras compatíveis com iOS e Android
    shadowColor: "#000",
        boxShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    marginTop: 49,
    backgroundColor: "#fff",
  },
  txt: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 30,
  },
  subtxt: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 30,
    opacity: 0.54,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    gap: 15,
    width: "100%",
    marginBottom: 10,
  },
  imagemChave: {
    width: 18,
    height: 18,
  },
  imagemLocal: {
    width: 14,
    height: 18,
  },
  imagemUser: {
    width: 15,
    height: 18,
  },
  nameSection: {
    fontSize: 16,
    fontWeight: "medium",
    marginBottom: 5,
    opacity: 0.54,
  },
  descSection: {
    fontSize: 18,
    width: 240,
    fontWeight: "medium",
  },
  linhaDivisoria: {
    height: 1,
    backgroundColor: "#000",
    opacity: 0.25,
    width: 300,
    marginLeft: 34,
  },
  dadosTxt: {
    fontSize: 16,
    marginLeft: 30,
    width: 300,
  },
  dadosImg: {
    marginLeft: 26,
    borderRadius: 30,
    width: 308,
    height: 140,
  },
  btn: {
    marginTop: 34,
    borderColor: "#2563EB",
    borderWidth: 1,
    width: 368,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  txtbtn: {
    color: "#2563EB",
    fontSize: 18,
    fontWeight: "bold",
  },
});
