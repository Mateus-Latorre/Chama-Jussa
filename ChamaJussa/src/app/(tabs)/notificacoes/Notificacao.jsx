import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StylesNotificacao';
import { jussaContext } from '../../../Context/jussaContext';
import { UsuarioContext } from '../../../Context/usuarioContext';
import { useContext, useEffect } from 'react';

function App() {
    const { listagemNotificacao, getNotificacao } = useContext(jussaContext);
    const { usuario } = useContext(UsuarioContext);

    useEffect(() => {
        // Extrai o ID do usuário logado
        const idLogado = 
            usuario?.idUsuario || 
            usuario?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || 
            usuario?.jti;

        // Dispara a busca enviando o ID para a rota /api/Notificacao/{idUsuario}
        if (idLogado) {
            getNotificacao(idLogado);
        }
    }, [usuario]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Notificações</Text>

                    <ScrollView 
                        style={styles.scroll} 
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        {listagemNotificacao.length === 0 ? (
                            <Text style={{ textAlign: 'center', marginTop: 20, color: '#888' }}>
                                Nenhuma notificação encontrada.
                            </Text>
                        ) : (
                            listagemNotificacao.map((notificacao, index) => {
                                // Formatação da DataCriacao vinda do C#
                                const dataObjeto = notificacao.dataCriacao ? new Date(notificacao.dataCriacao) : null;
                                const dataFormatada = dataObjeto ? dataObjeto.toLocaleDateString("pt-BR") : "";
                                const horaFormatada = dataObjeto ? dataObjeto.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' }) : "";

                                return (
                                    <View style={styles.caixa} key={notificacao.idNotificacao || index}>
                                        <Image source={require('../../../../assets/Alerta.png')} />
                                        <View style={styles.Textos}>
                                            <Text style={styles.tituloChamada}>Atualização de OS</Text>
                                            
                                            {/* 💡 Exibe a propriedade 'mensagem' gerada no seu C# */}
                                            <Text style={styles.Descricoe}>
                                                {notificacao.mensagem || notificacao.Mensagem}
                                            </Text>

                                            <View style={styles.Data}>
                                                <Text style={styles.Descricoe}>{dataFormatada}</Text>
                                                <Text style={styles.Descricoe}>{horaFormatada}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                        )}
                    </ScrollView>
                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default App;