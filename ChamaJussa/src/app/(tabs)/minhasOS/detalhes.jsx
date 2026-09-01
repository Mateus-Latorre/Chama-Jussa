import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { JussaProvider } from "../../../Context/jussaContext";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./StyleDetalhes";
import { Image } from "react-native";
import { useRouter } from "expo-router";
function App() {
  const route = useRouter();
  const paginaDetalhes = () => {
    route.push("minhasOS/detalhes")
  }
  const paginaCadOS = () => {
    route.push("/cadastroServico/cadServico")
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
        <ScrollView >
        <JussaProvider>
          <View style={styles.container}  >
            <Text style={styles.titulo}>Detalhes da OS - 1001</Text>
            <View style={styles.formulario}>
                <Text style={styles.txt}>Vazamento hidráulico</Text>
                <Text style={styles.subtxt}>Criada em 17/06/2026, 11:29:58</Text>
                <View style={styles.section}>
                  <Image source={require("../../../../assets/Chave.png")} style={styles.imagemChave} />
                  <View style={styles.sectionTxt}>
                    <Text style={styles.nameSection}>Máquina / Equipamento</Text>
                    <Text style={styles.descSection}>Tubulação/Sifão da Pia</Text>
                  </View>
                </View>
                <View style={styles.section}>
                  <Image source={require("../../../../assets/Local.png")} style={styles.imagemLocal} />
                  <View style={styles.sectionTxt}>
                    <Text style={styles.nameSection}>Local / Setor</Text>
                    <Text style={styles.descSection}>Banheiro Masculino - Bloco B - 2º Andar</Text>
                  </View>
                </View>
                <View style={styles.section}>
                  <Image source={require("../../../../assets/User.png")} style={styles.imagemUser} />
                  <View style={styles.sectionTxt}>
                    <Text style={styles.nameSection}>Solicitante</Text>
                    <Text style={styles.descSection}>Gato Nerd</Text>
                  </View>
                </View>
                <View style={styles.linhaDivisoria} />
                <View style={styles.dados}>
                  <Text style={styles.txt}>Descrição do Problema</Text>
                  <Text style={styles.dadosTxt}>Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B. Está alagando o chão e causando risco de queda.</Text>
                  <Text style={styles.txt}>Foto do Problema</Text>
                  <Image source={require("../../../../assets/Cadeira.png")} style={styles.dadosImg} />
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={paginaCadOS}>
                <Text style={styles.txtbtn}>Editar Solicitação</Text>
            </TouchableOpacity>
          </View>
        </JussaProvider>
        </ScrollView>
      </SafeAreaView>
      {/* <Footer /> */}
    </SafeAreaProvider>
  );
}
export default App;

