import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { jussaContext } from '../../Context/jussaContext'; // Ajuste o caminho de importação do contexto

export default function SelecionarFoto() {
  const { imagem, setImagem } = useContext(jussaContext);

  // 1. Função para abrir a Câmera
  const tirarFoto = async () => {
    // Solicita permissão da câmera
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert("Permissão necessária", "Precisamos de acesso à câmera para tirar a foto.");
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true, // Permite cortar a foto
      quality: 0.8,
    });

    if (!resultado.canceled) {
      // Salva a foto no contexto
      setImagem(resultado.assets[0]);
    }
  };

  // 2. Função para abrir a Galeria
  const escolherGaleria = async () => {
    // Solicita permissão da galeria
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert("Permissão necessária", "Precisamos de acesso às suas fotos.");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!resultado.canceled) {
      // Salva a foto no contexto
      setImagem(resultado.assets[0]);
    }
  };

  // 3. Menu de Opções (Tirar foto / Escolher da galeria)
  const selecionarOpcao = () => {
    Alert.alert(
      "Anexar Foto",
      "Escolha de onde deseja pegar a imagem:",
      [
        { text: "Tirar Foto", onPress: tirarFoto },
        { text: "Escolher da Galeria", onPress: escolherGaleria },
        { text: "Cancelar", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={selecionarOpcao}>
        <Text style={styles.textoBotao}>
          {imagem ? "Alterar Foto" : "Anexar Foto"}
        </Text>
      </TouchableOpacity>

      {/* Exibe a preview da imagem selecionada (se houver) */}
      {imagem && (
        <View style={styles.previewContainer}>
          <Image 
            source={{ uri: imagem.uri || imagem }} 
            style={styles.preview} 
          />
          <TouchableOpacity onPress={() => setImagem(null)}>
            <Text style={styles.remover}>Remover Foto</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  previewContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  preview: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  remover: {
    color: 'red',
    marginTop: 8,
  },
});