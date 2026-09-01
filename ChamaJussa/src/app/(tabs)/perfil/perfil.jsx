import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { JussaProvider } from "../../../Context/jussaContext";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./StylePerfil";
import { Image } from "react-native";
import { useRouter } from "expo-router";
function App(){
    const route = useRouter();
    const paginaLogin = () => {
        route.replace("/")
    }
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <JussaProvider>
                    <View style={styles.container}>
                        <Text style={styles.texto}>Perfil</Text>
                        <View style={styles.formulario}>
                            <Image source={require("../../../../assets/as.jpg")} style={styles.imagem} />
                            <Text style={styles.textoNome}>Gato Nerd</Text>
                            <Text style={styles.textoEmail}>gatonerd@gmail.com</Text>
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={paginaLogin}>
                            <Text style={styles.txtbtn}>Sair da conta</Text>
                        </TouchableOpacity>
                    </View>
                </JussaProvider>
            </SafeAreaView>
            {/* <Footer /> */}
        </SafeAreaProvider>
    )
}
export default App;