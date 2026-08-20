
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, TextInput, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StyleCadServico';
import { JussaProvider } from '../Context/jussaContext';
import { Footer } from "../Componentes/footer/Footer"

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <JussaProvider>
                    <View style={styles.container}>
                        <Text style={styles.titulo}>Criar ordem de serviço</Text>
                        <ScrollView style={styles.caixa}>

                            <Text style={styles.titulochamada}>Titulo do Problema * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' />

                            <Text style={styles.titulochamada}>Maquina/ Equipamento * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' />

                            <Text style={styles.titulochamada}>Local / Setor * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' />

                            <Text style={styles.titulochamada}>Descrição do Problema * </Text>
                            <TextInput style={[styles.input, styles.inputMaior]} placeholder='Ex: vazamento da pia' />

                            <Text style={styles.titulochamada}>imagem / Foto do Problema * </Text>
                            <TextInput style={styles.input} placeholder='Ex: insira uma imagem' />

                            <TouchableOpacity style={styles.botao}>
                                <Text style={styles.textobtn}>Criar ordem de Serviço</Text>
                            </TouchableOpacity>

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
