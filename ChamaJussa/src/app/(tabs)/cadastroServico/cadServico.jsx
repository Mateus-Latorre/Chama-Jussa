import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./StyleCadServico";
import { jussaContext, JussaProvider } from "../../../Context/jussaContext";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";

function App() {
  const {
    postChamada,
    descricao,
    setDescricao,
    local,
    setLocal,
    tituloChamada,
    maquinaChamada,
    setMaquinaChamada,
    setTituloChamada,
    setImagem,
    imagem,
    editMode,
    setEditMode,
    idToEdit,
    setIdToEdit,
    putTask,
    deleteTask,
    statusChamada,
    setStatusChamada,
    paginaMinhasOS
  } = useContext(jussaContext);
  console.log(imagem);
  console.log(idToEdit);
  console.log(editMode);
  console.log(tituloChamada);
  console.log(maquinaChamada);
  console.log(local);
  console.log(descricao);
  console.log(imagem);
  console.log(statusChamada);
  const [selecionado, setSelecionado] = useState("Aberta");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Criar ordem de serviço</Text>
          <View style={styles.caixa}>
            <ScrollView>
              <Text style={styles.titulochamada}>Titulo do Problema * </Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Vazamento da pia"
                value={tituloChamada}
                onChangeText={setTituloChamada}
              />

              <Text style={styles.titulochamada}>Maquina/ Equipamento * </Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Pia"
                value={maquinaChamada}
                onChangeText={setMaquinaChamada}
              />

              <Text style={styles.titulochamada}>Local / Setor * </Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Sala de Máquinas"
                value={local}
                onChangeText={setLocal}
              />

              <Text style={styles.titulochamada}>Descrição do Problema * </Text>
              <TextInput
                style={[styles.input, styles.inputMaior]}
                placeholder="Ex: A pia do banheiro está vazando água, causando alagamento no chão. Precisa de reparo urgente."
                value={descricao}
                onChangeText={setDescricao}
              />
              {editMode && (
                <View style={styles.container2}>
                  {/* Botão Todos */}

                  {/* Botão Abertas */}
                  <TouchableOpacity
                    style={[
                      styles.botao,
                      selecionado === "Aberta" && styles.botaoAtivo,
                    ]}
                    onPress={() => {setStatusChamada("Aberta"), setSelecionado("Aberta")}}
                  >
                    <Text
                      style={[
                        styles.texto,
                        selecionado === "Aberta" && styles.textoAtivo,
                      ]}
                    >
                      Aberta
                    </Text>
                  </TouchableOpacity>

                  {/* Botão Em Andamento */}
                  <TouchableOpacity
                    style={[
                      styles.botao,
                      selecionado === "Andamento" && styles.botaoAtivo,
                    ]}
                    onPress={() => {setStatusChamada("Andamento"), setSelecionado("Andamento")}}
                  >
                    <Text
                      style={[
                        styles.texto,
                        selecionado === "Andamento" && styles.textoAtivo,
                      ]}
                    >
                      Em Andamento
                    </Text>
                  </TouchableOpacity>

                  {/* Botão Concluídas */}
                  <TouchableOpacity
                    style={[
                      styles.botao,
                      selecionado === "Finalizado" && styles.botaoAtivo,
                    ]}
                    onPress={() => {setStatusChamada("Finalizado"), setSelecionado("Finalizado")}}
                  >
                    <Text
                      style={[
                        styles.texto,
                        selecionado === "Finalizado" && styles.textoAtivo,
                      ]}
                    >
                      Finalizado
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              <Text style={styles.titulochamada}>
                imagem / Foto do Problema *{" "}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Insira uma imagem"
              />
              {editMode && (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {setEditMode(false),
                    setTituloChamada(""),
                    setMaquinaChamada(""),
                    setLocal(""),
                    setDescricao(""),
                    setImagem(null),
                    paginaMinhasOS()
                  }}
                >
                  <Text style={styles.textobtn}>Cancelar</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.btn}
                onPress={editMode ? putTask : postChamada}
              >
                <Text style={styles.textobtn}>
                  {editMode
                    ? "Atualizar ordem de Serviço"
                    : "Criar ordem de Serviço"}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <StatusBar style="auto" />
        </View>
        {/* <Footer /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
