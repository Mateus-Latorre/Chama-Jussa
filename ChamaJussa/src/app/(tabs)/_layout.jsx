import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <>
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#666",
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 8,
                    paddingTop: 6,
                    borderTopWidth: 3,
                    borderTopColor: "#E5E5E5",
                    backgroundColor: "#FFFFFF",
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                },
            }}
        >
            <Tabs.Screen
                name="minhasOS/index"
                options={{
                    title: "Minha OS",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="document-text-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="cadastroServico/cadServico"
                options={{
                    title: "Criar OS",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="notificacoes/Notificacao"
                options={{
                    title: "Notificações",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="perfil/perfil"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />

            {/* Tela de detalhes escondida do menu inferior */}
            <Tabs.Screen
                name="detalhesOS/detalhes"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="minhasOS/detalhes"
                options={{
                    href: null,
                }}
            />

            {/* Tela inicial/login escondida do menu inferior */}
            <Tabs.Screen
                name="index"
                options={{
                    href: null,
                    tabBarStyle: { display: "none" }
                }}
                />                
        <Tabs.Screen
                name="cadUsuario/cadUsuario"
                options={{
                    href: null,
                    tabBarStyle: { display: "none" }
                }}
                />
        </Tabs>

       
                
     </>    
    );
}