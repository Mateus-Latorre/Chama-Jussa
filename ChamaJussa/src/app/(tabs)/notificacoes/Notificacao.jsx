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
        getNotificacao();
    }, []);
    const notificacoesFiltradas = listagemNotificacao.filter((notificacao) => {
        const idLogado = 
            usuario?.idUsuario || 
            usuario?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || 
            usuario?.jti;
        return String(notificacao?.idUsuario).trim().toLowerCase() === String(idLogado).trim().toLowerCase();
    });

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
                        {
                            notificacoesFiltradas.map((notificacao, index) => {
                                const chave = notificacao.idNotificacao || index;

                                return (
                                    <View style={styles.caixa} key={chave}>
                                        <Image source={require('../../../../assets/Alerta.png')} />
                                        <View style={styles.Textos}>
                                            <Text style={styles.tituloChamada}>
                                                {notificacao.titulo || "Ordem De Serviço Finalizada"}
                                            </Text>
                                            <Text style={styles.Descricoe}>
                                                {notificacao.descricao || "Sua OS foi finalizada, logo ela voltará para sua sala."}
                                            </Text>
                                            <View style={styles.Data}>
                                                <Text style={styles.Descricoe}>{notificacao.data || "22/06/2026"}</Text>
                                                <Text style={styles.Descricoe}>{notificacao.hora || "16:03"}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default App;