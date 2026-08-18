
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StylesNotificacao';
import { JussaProvider } from '../Context/jussaContext';
import { Footer } from "../Componentes/footer/Footer"

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <JussaProvider>
                    <View style={styles.container}>
                        <Text style={styles.titulo}>Notificações</Text>
                        <ScrollView style={styles.scroll}>
                            <View style={styles.caixa}>
                                <Image source={require('../../assets/Alerta.png')} />
                                <View style={styles.Textos}>
                                    <Text style={styles.tituloChamada}>Ordem De Serviço Finalizada</Text>
                                    <Text style={styles.Descricoe}>Sua OS foi finalizada, logo ela voltará para sua sala.</Text>
                                    <View style={styles.Data}>
                                        <Text style={styles.Descricoe}>22/06/2026</Text>
                                        <Text style={styles.Descricoe}>16:03</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.caixa}>
                                <Image source={require('../../assets/Alerta.png')} />
                                <View style={styles.Textos}>
                                    <Text style={styles.tituloChamada}>Ordem De Serviço Finalizada</Text>
                                    <Text style={styles.Descricoe}>Sua OS foi finalizada, logo ela voltará para sua sala.</Text>
                                    <View style={styles.Data}>
                                        <Text style={styles.Descricoe}>22/06/2026</Text>
                                        <Text style={styles.Descricoe}>16:03</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.caixa}>
                                <Image source={require('../../assets/Alerta.png')} />
                                <View style={styles.Textos}>
                                    <Text style={styles.tituloChamada}>Ordem De Serviço Finalizada</Text>
                                    <Text style={styles.Descricoe}>Sua OS foi finalizada, logo ela voltará para sua sala.</Text>
                                    <View style={styles.Data}>
                                        <Text style={styles.Descricoe}>22/06/2026</Text>
                                        <Text style={styles.Descricoe}>16:03</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.caixa}>
                                <Image source={require('../../assets/Alerta.png')} />
                                <View style={styles.Textos}>
                                    <Text style={styles.tituloChamada}>Ordem De Serviço Finalizada</Text>
                                    <Text style={styles.Descricoe}>Sua OS foi finalizada, logo ela voltará para sua sala.</Text>
                                    <View style={styles.Data}>
                                        <Text style={styles.Descricoe}>22/06/2026</Text>
                                        <Text style={styles.Descricoe}>16:03</Text>
                                    </View>
                                </View>
                            </View>


                        </ScrollView>
                        <StatusBar style="auto" />


                    </View>
                    <Footer />

                </JussaProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default App;
