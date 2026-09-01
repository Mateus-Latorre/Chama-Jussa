import { Stack } from "expo-router";
// Ajuste o caminho das pastas '../' de acordo com a localização do seu arquivo _layout
import { UsuarioProvider } from "../Context/usuarioContext"; 
import { JussaProvider } from "../Context/jussaContext";

export default function Layout() {
    return (
        <UsuarioProvider>
            <JussaProvider>
                <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
                    {/* Rota inicial (Login) */}
                    <Stack.Screen name="index" />
                    
                    {/* Rota caso seu login esteja em app/login.js */}
                    <Stack.Screen name="login" />

                    {/* Grupo de telas com abas (após o login) */}
                    <Stack.Screen name="(tabs)" />
                </Stack>
            </JussaProvider>
        </UsuarioProvider>
    );
}