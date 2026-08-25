
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StyleLista';
import { JussaProvider } from '../../../Context/jussaContext';
import React, { useState } from 'react';

function App() {
    const [selecionado, setSelecionado] = useState('Todos');
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <JussaProvider>
                    <View style={styles.container}>
                        <View style={styles.headerOS}>
                            <View style={styles.textoBox}>
                                <Text style={styles.titulo}>Olá, Gato Nerd</Text>
                                <Text style={styles.subsubtitulo}>Minhas OS's</Text>
                            </View>
                            <View style={styles.caixaOs}>
                                <TouchableOpacity style={styles.btnOS}>
                                    <Text style={styles.txtBtn}>Nova OS
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        {/* <View style={styles.container3}>
                            <Text style={[styles.botaoOS, selecionado === 'Todos' && styles.botaoAtivo]}
                                onPress={() => setSelecionado('Todos')}>

                            </Text>

                        </View> */}
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
                        <ScrollView style={styles.scroll}>
                            <View style={styles.caixa}>
                                <View style={styles.Textos}>
                                    {/* <View style={styles.azul}> */}

                                        <Text style={styles.tituloAzul}>OS - 001</Text>
                                        {/* <TouchableOpacity>
                                            <Text>Aberta</Text>
                                        </TouchableOpacity>
                                    </View> */}


                                    <Text style={styles.tituloSub}>Vazamento hidráulico no Bloco B</Text>
                                    <View style={styles.Data}>
                                        <Text style={styles.Descricoe}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus error</Text>

                                    </View>

                                </View>
                            </View>

                        </ScrollView>
                        <StatusBar style="auto" />

                    </View>
                    {/* <Footer /> */}

                </JussaProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default App;