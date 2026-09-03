
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, TextInput, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StyleCadServico';
import { jussaContext, JussaProvider } from '../../../Context/jussaContext';
import { useContext } from 'react';

function App() {
    const { postChamada, descricao, setDescricao, local, setLocal, tituloChamada, maquinaChamada, setMaquinaChamada, setTituloChamada, setImagem, imagem, editMode, setEditMode, idToEdit, setIdToEdit, putTask, deleteTask,statusChamada, setStatusChamada } = useContext(jussaContext);
    console.log(imagem);
    console.log(idToEdit);
    console.log(editMode);
    console.log(tituloChamada);
    console.log(maquinaChamada);
    console.log(local);
    console.log(descricao);
    console.log(imagem);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>

                    <View style={styles.container}>
                        <Text style={styles.titulo}>Criar ordem de serviço</Text>
                        <View style={styles.caixa}>
                <ScrollView>
    
                            <Text style={styles.titulochamada}>Titulo do Problema * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' value={tituloChamada} onChangeText={setTituloChamada} />

                            <Text style={styles.titulochamada}>Maquina/ Equipamento * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' value={maquinaChamada} onChangeText={setMaquinaChamada}/>

                            <Text style={styles.titulochamada}>Local / Setor * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' value={local} onChangeText={setLocal}/>

                            <Text style={styles.titulochamada}>Descrição do Problema * </Text>
                            <TextInput style={[styles.input, styles.inputMaior]} placeholder='Ex: vazamento da pia' value={descricao} onChangeText={setDescricao}/>
                            {
                                editMode &&
                                <>
                                <Text style={styles.titulochamada}>Status do Problema * </Text>
                                <TextInput style={styles.input} placeholder='Ex: vazamento da pia' value={statusChamada} onChangeText={setStatusChamada}/>
                                </>
                            }
                            <Text style={styles.titulochamada}>imagem / Foto do Problema * </Text>
                            <TextInput style={styles.input} placeholder='Ex: insira uma imagem' />
                            {
                                editMode &&
                                <TouchableOpacity style={styles.botao} onPress={() => setEditMode(false)}>
                                    <Text style={styles.textobtn}>Cancelar</Text>
                                </TouchableOpacity>
                            }

                            <TouchableOpacity style={styles.botao} onPress={editMode ? putTask : postChamada}>
                                <Text style={styles.textobtn}>{editMode ? "Atualizar ordem de Serviço" : "Criar ordem de Serviço"}</Text>
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
