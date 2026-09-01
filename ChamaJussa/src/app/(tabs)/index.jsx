import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StyleLogin';
import { JussaProvider } from '../../Context/jussaContext';
import { UsuarioContext, UsuarioProvider } from '../../Context/usuarioContext';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';

// Você precisará instalar: npx expo install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { jwtDecode } from 'jwt-decode';
import api from '../../Componentes/services/service'; // Ajuste o caminho da sua API

export default function App() {
    const route = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { setUsuario } = useContext(UsuarioContext);

    const realizarLogin = async () => {
        if (email.trim().length === 0 || senha.trim().length === 0) {
            Alert.alert('Atenção', 'O email e a senha não podem estar em branco.');
            return;
        }

        const dadosLogin = { email, senha };

        try {
            const retornoAPI = await api.post("/Login", dadosLogin);
            const token = retornoAPI.data.token;
            const usuarioDecoded = jwtDecode(token);

            setUsuario(usuarioDecoded);
            
            // Salvando no aparelho nativamente
            await AsyncStorage.setItem("usuario", JSON.stringify(usuarioDecoded));
            await AsyncStorage.setItem("token", token); // Salvar o token é essencial para as próximas requisições!
            
            // Redireciona para as OS e limpa o histórico de navegação
            route.replace("/minhasOS"); 
            
            setEmail("");
            setSenha("");
        } catch (error) {
            Alert.alert('Erro de Login', 'Usuário não encontrado ou senha incorreta.');
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                        <View style={styles.container}>

                            <Image source={require('../../../assets/logo.png')} />

                            <View style={styles.formulario}>
                                <Text style={styles.titulo}>Chama Jussa</Text>
                                <Text style={styles.texto}>Gerenciamento de Ordem de Serviço</Text>
                                
                                <View style={styles.inputs}>
                                    <Text style={styles.pedidoCaixa}>Email</Text>
                                    <TextInput 
                                        style={styles.input} 
                                        value={email} 
                                        onChangeText={setEmail} // <- Correção nativa
                                        placeholder='Email@email.com'
                                        autoCapitalize='none'
                                        keyboardType='email-address'
                                    />
                                    
                                    <Text style={styles.pedidoCaixa}>Senha</Text>
                                    <TextInput 
                                        style={styles.input} 
                                        value={senha} 
                                        onChangeText={setSenha} // <- Correção nativa
                                        placeholder='digite sua senha'
                                        secureTextEntry={true} // Esconde a senha
                                    />
                                    
                                    <TouchableOpacity style={styles.botao} onPress={realizarLogin}>
                                        <Text style={styles.textobtn}>Acessar o Sistema</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                        </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}