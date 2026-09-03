import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { JussaProvider } from "../../../Context/jussaContext";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./StylePerfil";
import { Image } from "react-native";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { UsuarioContext } from "../../../Context/usuarioContext";
function App() {
  const route = useRouter();
  const paginaLogin = () => {
    route.replace("/");
  };
  const { usuario } = useContext(UsuarioContext);
  console.log("Payload do Usuário:", JSON.stringify(usuario, null, 2));
  const baseUrl = "http://172.16.1.125:5185";
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <JussaProvider>
          <View style={styles.container}>
            <Text style={styles.texto}>Perfil</Text>
            <View style={styles.formulario}>
              <Image
                source={
                  usuario?.fotoPerfil
                    ? {uri: `${baseUrl}${usuario.fotoPerfil}`}
                    : require("../../../../assets/ft_padrao.webp") // Imagem padrão de fallback
                }
                style={styles.imagem}
              />
              <Text style={styles.textoNome}>
                {usuario?.nome ||
                  usuario?.Nome ||
                  usuario?.unique_name ||
                  usuario?.[
                    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
                  ] ||
                  "Nome não encontrado"}
              </Text>
              <Text style={styles.textoEmail}>{usuario.email}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={paginaLogin}>
              <Text style={styles.txtbtn}>Sair da conta</Text>
            </TouchableOpacity>
          </View>
        </JussaProvider>
      </SafeAreaView>
      {/* <Footer /> */}
    </SafeAreaProvider>
  );
}
export default App;
