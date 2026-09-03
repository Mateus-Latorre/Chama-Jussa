
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StyleCadServico';
import { jussaContext, JussaProvider } from '../../../Context/jussaContext';
import {useState, useContext } from 'react';
import ImagePicker from 'expo-image-picker'

function App() {

    const { imagem, setImagem,postChamada, descricao, setDescricao, local, setLocal, tituloChamada, maquinaChamada, setMaquinaChamada, setTituloChamada, putChamada, editMode, setEditMode} = useContext(jussaContext)

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                    <View style={styles.container}>
                        <Text style={styles.titulo}>Criar ordem de serviço</Text>
                        <View style={styles.caixa}>

                            <Text style={styles.titulochamada}>Titulo do Problema * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' value={tituloChamada} onChangeText={setTituloChamada} />

                            <Text style={styles.titulochamada}>Maquina/ Equipamento * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' value={maquinaChamada} onChangeText={setMaquinaChamada}/>

                            <Text style={styles.titulochamada}>Local / Setor * </Text>
                            <TextInput style={styles.input} placeholder='Ex: vazamento da pia' value={local} onChangeText={setLocal}/>

                            <Text style={styles.titulochamada}>Descrição do Problema * </Text>
                            <TextInput style={[styles.input, styles.inputMaior]} placeholder='Ex: vazamento da pia' value={descricao} onChangeText={setDescricao}/>

                            <Text style={styles.titulochamada}>imagem / Foto do Problema * </Text>
                            <TextInput style={styles.input} placeholder='Ex: insira uma imagem' />

                            <TouchableOpacity style={styles.botao} onPress={()=>{ if(editMode) putChamada() 
                                else postChamada()}}>
                                <Text style={styles.textobtn}>Criar ordem de Serviço</Text>
                            </TouchableOpacity>

                        </View>
                        <StatusBar style="auto" />


                    </View>
                    {/* <Footer /> */}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default App;
