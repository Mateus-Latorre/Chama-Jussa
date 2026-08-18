
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import { jussaProvider } from './Context/jussaContext';
import { Footer } from "./Componentes/footer/Footer"

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <jussaProvider>
                    <View style={styles.container}>
                        <Text style={styles.titulo}>Notificações</Text>

                        <StatusBar style="auto" />
                    </View>
                    <Footer />
                </jussaProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default App;
