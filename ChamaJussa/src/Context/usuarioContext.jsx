import { createContext, useEffect, useState } from "react";
// Importação obrigatória para o React Native 👇
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export const UsuarioContext = createContext();

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        // Criamos uma função assíncrona dentro do useEffect
        const carregarUsuario = async () => {
            try {
                // Trocamos o localStorage pelo AsyncStorage com await
                const usuarioLogado = await AsyncStorage.getItem("usuario");
                
                if (usuarioLogado) {
                    setUsuario(JSON.parse(usuarioLogado));
                }
            } catch (error) {
                console.error("Erro ao buscar usuário na memória:", error);
            }
        };

        carregarUsuario(); // Executa a função
    }, []);

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
}