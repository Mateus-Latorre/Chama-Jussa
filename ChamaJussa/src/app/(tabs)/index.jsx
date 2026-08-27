import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StyleLogin';
import { JussaProvider } from '../../Context/jussaContext';

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <JussaProvider>
                    <View style={styles.container}>

                        <Image source={require('../../../assets/logo.png')} />

                        <View style={styles.formulario}>
                            <Text style={styles.titulo}>Chama Jussa</Text>
                            <Text style={styles.texto}>Gerenciamento de Ordem de Serviço</Text>
                            <View style={styles.inputs}>
                                <Text style={styles.pedidoCaixa}>Email</Text>
                                <TextInput style={styles.input} placeholder='Email@email.com'/>
                                <Text style={styles.pedidoCaixa}>Senha</Text>
                                <TextInput style={styles.input} placeholder='digite sua senha'/>
                                <TouchableOpacity style={styles.botao}>
                                    <Text style={styles.textobtn}>Acessar o Sistema</Text>
                                </TouchableOpacity>
                                <Text>
                                    Se você ainda não tem uma conta
                                </Text>
                                <Text>
                                    Cadastre-se
                                </Text>


                            </View>
                        </View>
                    </View>

                </JussaProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default App;
