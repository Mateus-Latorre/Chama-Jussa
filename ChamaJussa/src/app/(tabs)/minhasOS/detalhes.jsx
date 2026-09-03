import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { jussaContext, JussaProvider } from "../../../Context/jussaContext";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./StyleDetalhes";
import { Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { UsuarioContext } from "../../../Context/usuarioContext";
function App() {
  const route = useRouter();
  const { id } = useLocalSearchParams();
  const {
    chamadaUnica,
    listagemChamadas,
    setListagemChamadas,
    descricao,
    setDescricao,
    local,
    setLocal,
    tituloChamada,
    setTituloChamada,
    maquinaChamada,
    setMaquinaChamada,
    imagem,
    setImagem,
    editMode,
    setEditMode,
    idToEdit,
    setIdToEdit,
    putTask,
    deleteTask,
    paginaCadOS,
    editChamada,
    getIdChamada,
  } = useContext(jussaContext);
  const { usuario } = useContext(UsuarioContext);
  const baseUrl = "http://172.16.1.125:5185";
  useEffect(() => {
    if (id) {
      getIdChamada(id);
    }
  }, [id]);
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.safeArea}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ScrollView>
          {chamadaUnica.map((chamada) => {
            return (
              <View
                style={styles.container}
                key={chamada.idServico}
                id={chamada.idServico}
              >
                <Text style={styles.titulo}>Detalhes da OS - 1001</Text>
                <View style={styles.formulario}>
                  <Text style={styles.txt}>{chamada.titulo}</Text>
                  <Text style={styles.subtxt}>
                    Criada em {chamada.dataCriacao}
                  </Text>
                  <View style={styles.section}>
                    <Image
                      source={require("../../../../assets/Chave.png")}
                      style={styles.imagemChave}
                    />
                    <View style={styles.sectionTxt}>
                      <Text style={styles.nameSection}>
                        Máquina / Equipamento
                      </Text>
                      <Text style={styles.descSection}>
                        {chamada.equipamento}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.section}>
                    <Image
                      source={require("../../../../assets/Local.png")}
                      style={styles.imagemLocal}
                    />
                    <View style={styles.sectionTxt}>
                      <Text style={styles.nameSection}>Local / Setor</Text>
                      <Text style={styles.descSection}>{chamada.lugar}</Text>
                    </View>
                  </View>
                  <View style={styles.section}>
                    <Image
                      source={require("../../../../assets/User.png")}
                      style={styles.imagemUser}
                    />
                    <View style={styles.sectionTxt}>
                      <Text style={styles.nameSection}>Solicitante</Text>
                      <Text style={styles.descSection}>{usuario.nome}</Text>
                    </View>
                  </View>
                  <View style={styles.linhaDivisoria} />
                  <View style={styles.dados}>
                    <Text style={styles.txt}>Descrição do Problema</Text>
                    <Text style={styles.dadosTxt}>{chamada.descricao}</Text>
                    <Text style={styles.txt}>Foto do Problema</Text>
                    {chamada.fotoUrl ? (
                      <Image
                        source={{
                          uri: `${baseUrl}/imagens/${chamada.fotoUrl}`,
                        }}
                        style={styles.dadosImg}
                        resizeMode="cover"
                      />
                    ) : (
                      <Text style={{ color: "#888", marginTop: 10 }}>
                        Nenhuma foto anexada.
                      </Text>
                    )}
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => editChamada(chamada)}
                >
                  <Text style={styles.txtbtn}>Editar Solicitação</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
      {/* <Footer /> */}
    </SafeAreaProvider>
  );
}
export default App;
