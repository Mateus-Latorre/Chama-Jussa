import { Stack } from "expo-router";
// Ajuste o caminho das pastas '../' de acordo com a localização do seu arquivo _layout
import { UsuarioProvider } from "../Context/usuarioContext"; 
import { JussaProvider } from "../Context/jussaContext";

export default function Layout() {
    return (
        <UsuarioProvider>
            <JussaProvider>
                <Stack>
                    <Stack.Screen 
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </JussaProvider>
        </UsuarioProvider>
    );
}