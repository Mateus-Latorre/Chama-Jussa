import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./StyleLista";
import { jussaContext } from "../../../Context/jussaContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { UsuarioContext } from "../../../Context/usuarioContext";

export default function App() {
<<<<<<< HEAD
    const [selecionado, setSelecionado] = useState('Todos');
    const route = useRouter();
    const paginaDetalhes = () => {
        route.push("minhasOS/detalhes")
    }
    const paginaCadOS = () => {
        route.push("cadastroServico/cadServico")
    }
    const { listagemChamadas, getChamada } = useContext(jussaContext)
    const { usuario } = useContext(UsuarioContext)
    useEffect(() => {
        getChamada();
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container} >
                    <View style={styles.headerOS}>
                        <View style={styles.textoBox}>
                            <Text style={styles.titulo}>Olá, {usuario.nome}</Text>
                            <Text style={styles.subsubtitulo}>Minhas OS's</Text>
                        </View>
                        <View style={styles.caixaOs}>
                            <TouchableOpacity style={styles.btnOS} onPress={paginaCadOS}>
                                <Text style={styles.txtBtn}>Nova OS
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {/* <View style={styles.container3}>
=======
  const [selecionado, setSelecionado] = useState("Todos");
  const route = useRouter();
  const paginaDetalhes = () => {
    route.push("minhasOS/detalhes");
  };
  const paginaCadOS = () => {
    route.push("cadastroServico/cadServico");
  };
  const { listagemChamadas, getChamada } = useContext(jussaContext);
  const { usuario } = useContext(UsuarioContext);
  useEffect(() => {
    getChamada();
  }, []);
const chamadasFiltradas = listagemChamadas.filter((chamada) => {
  // Captura o ID do usuário considerando a claim do ASP.NET
  const idLogado = 
    usuario?.idUsuario || 
    usuario?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || 
    usuario?.jti;

  // 1. Garante que só exibe as OSs criadas pelo usuário logado
  const pertenceAoUsuario = 
    String(chamada?.idUsuario).trim().toLowerCase() === String(idLogado).trim().toLowerCase();

  if (!pertenceAoUsuario) return false;

  // 2. Filtro dos botões
  if (selecionado === "Todos") return true;

  return (chamada?.idStatus || "").toString().trim().toLowerCase() === selecionado.toLowerCase();
});
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerOS}>
            <View style={styles.textoBox}>
              <Text style={styles.titulo}>Olá, {usuario.nome}</Text>
              <Text style={styles.subsubtitulo}>Minhas OS's</Text>
            </View>
            <View style={styles.caixaOs}>
              <TouchableOpacity style={styles.btnOS} onPress={paginaCadOS}>
                <Text style={styles.txtBtn}>Nova OS</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.container3}>
>>>>>>> 46a6fe70805d7ce9110e936b36c0fbcc08e19267
                            <Text style={[styles.botaoOS, selecionado === 'Todos' && styles.botaoAtivo]}
                                onPress={() => setSelecionado('Todos')}>

                            </Text>

                        </View> */}
<<<<<<< HEAD
                    <View style={styles.container2}>
                        {/* Botão Todos */}
                        <TouchableOpacity
                            style={[styles.botao, selecionado === 'Todos' && styles.botaoAtivo]}
                            onPress={() => setSelecionado('Todos')}
                        >
                            <Text style={[styles.texto, selecionado === 'Todos' && styles.textoAtivo]}>Todos</Text>
                        </TouchableOpacity>

                        {/* Botão Abertas */}
                        <TouchableOpacity
                            style={[styles.botao, selecionado === 'Abertas' && styles.botaoAtivo]}
                            onPress={() => setSelecionado('Abertas')}
                        >
                            <Text style={[styles.texto, selecionado === 'Abertas' && styles.textoAtivo]}>Abertas</Text>
                        </TouchableOpacity>

                        {/* Botão Em Andamento */}
                        <TouchableOpacity
                            style={[styles.botao, selecionado === 'Em Andamento' && styles.botaoAtivo]}
                            onPress={() => setSelecionado('Em Andamento')}
                        >
                            <Text style={[styles.texto, selecionado === 'Em Andamento' && styles.textoAtivo]}>Em Andamento</Text>
                        </TouchableOpacity>

                        {/* Botão Concluídas */}
                        <TouchableOpacity
                            style={[styles.botao, selecionado === 'Concluídas' && styles.botaoAtivo]}
                            onPress={() => setSelecionado('Concluídas')}
                        >
                            <Text style={[styles.texto, selecionado === 'Concluídas' && styles.textoAtivo]}>Concluídas</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        {listagemChamadas.map((chamada) => {
                            return (
                                <TouchableOpacity id={chamada.id} key={chamada.id} style={styles.caixa} onPress={paginaDetalhes}>
                                    <View style={styles.Textos}>
                                        {/* <View style={styles.azul}> */}
                                        <View style={styles.status}>
                                            <Text style={styles.tituloAzul}>OS - 001</Text>

                                            <Text style={styles.textoStatus}>Aberta</Text>
                                        </View>

                                        {/* <TouchableOpacity>
=======
          <View style={styles.container2}>
            {/* Botão Todos */}
            <TouchableOpacity
              style={[
                styles.botao,
                selecionado === "Todos" && styles.botaoAtivo,
              ]}
              onPress={() => setSelecionado("Todos")}
            >
              <Text
                style={[
                  styles.texto,
                  selecionado === "Todos" && styles.textoAtivo,
                ]}
              >
                Todos
              </Text>
            </TouchableOpacity>

            {/* Botão Abertas */}
            <TouchableOpacity
              style={[
                styles.botao,
                selecionado === "Aberta" && styles.botaoAtivo,
              ]}
              onPress={() => setSelecionado("Aberta")}
            >
              <Text
                style={[
                  styles.texto,
                  selecionado === "Aberta" && styles.textoAtivo,
                ]}
              >
                Abertas
              </Text>
            </TouchableOpacity>

            {/* Botão Em Andamento */}
            <TouchableOpacity
              style={[
                styles.botao,
                selecionado === "Andamento" && styles.botaoAtivo,
              ]}
              onPress={() => setSelecionado("Andamento")}
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
              onPress={() => setSelecionado("Finalizado")}
            >
              <Text
                style={[
                  styles.texto,
                  selecionado === "Finalizado" && styles.textoAtivo,
                ]}
              >
                Concluídas
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {chamadasFiltradas.map((chamada) => {
              return (
                <TouchableOpacity
                  id={chamada.idServico}
                  key={chamada.idServico}
                  style={styles.caixa}
                  onPress={paginaDetalhes}
                >
                  <View style={styles.Textos}>
                    {/* <View style={styles.azul}> */}

                    <Text style={styles.tituloAzul}>OS - 001</Text>
                    {/* <TouchableOpacity>
>>>>>>> 46a6fe70805d7ce9110e936b36c0fbcc08e19267
                                            <Text>Aberta</Text>
                                        </TouchableOpacity>
                                    </View> */}

<<<<<<< HEAD

                                        <Text style={styles.tituloSub}>{chamada.titulo}</Text>
                                        <View style={styles.Data}>
                                            <Text style={styles.Descricoe}>{chamada.descricao}</Text>

                                        </View>

                                    </View>
                                </TouchableOpacity>
                            )
                        })}


                    </ScrollView>
                    <StatusBar style="auto" />

                </View>
                {/* <Footer /> */}

            </SafeAreaView>
        </SafeAreaProvider>
    );
=======
                    <Text style={styles.tituloSub}>{chamada.titulo}</Text>
                    <View style={styles.Data}>
                      <Text style={styles.Descricoe}>{chamada.descricao}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <StatusBar style="auto" />
        </View>
        {/* <Footer /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
>>>>>>> 46a6fe70805d7ce9110e936b36c0fbcc08e19267
}
