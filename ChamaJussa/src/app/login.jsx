
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StylesNotificacao';
import { JussaProvider } from '../Context/jussaContext';
import { Footer } from "../Componentes/footer/Footer"

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <JussaProvider>
                    <View style={styles.container}>
                      


                        <StatusBar style="auto" />


                    </View>
                    <Footer />

                </JussaProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default App;
