import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: "#007AFF",
                    tabBarInactiveTintColor: "#666",
                    tabBarStyle: {
                        height: 100 ,
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
            ></Tabs>
            <Tabs.Screen
                name="minhasOS/index"
                options={{
                    headerShown: false,
                    title: "Minha OS",

                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons
                            name="document-text-outline"
                            size={size}
                            color={color}
                        />
                    }
                }}
            />
            <Tabs.Screen
                name="cadastroServico/cadServico"
                options={{
                    title: "Criar OS",
                    headerShown: false,

                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    },
                }}
            />
            <Tabs.Screen
                name="notificacoes/Notificacao"
                options={{
                    title: "Notificações",
                    headerShown: false,

                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons
                            name="notifications-outline"
                            size={size}
                            color={color}
                        />
                    },
                }}
            />

            <Tabs.Screen
                name="perfil/perfil"
                options={{
                    title: "Perfil",
                    headerShown: false,

                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons
                            name="person-outline"
                            size={size}
                            color={color}
                        />
                    },
                }}
            />

            <Tabs.Screen
                name="minhasOS/detalhes"
                options={{
                    title: "destalhes",
                    headerShown: false,
                    href:null,

                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons
                            name="?"
                            size={size}
                            color={color}
                        />
                    },
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    title: "destalhes",
                    headerShown: false,
                    href:null,

                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons
                            name="?"
                            size={size}
                            color={color}
                        />
                    },
                    tabBarStyle:{display:"none"}
                }}
            />
        </Tabs>
    )
}