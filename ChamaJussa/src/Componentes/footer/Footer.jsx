import { TouchableOpacity, View, Image, Text } from "react-native"
import { FooterStyle } from "./FooterStyle"
export const Footer = () => {
    return (
        <View style={FooterStyle.cardMenu}>
              <View style={FooterStyle.card} >
            <TouchableOpacity >

                <Image source={require('../../../assets/MinhasOS.png')}
                    style={FooterStyle.cardButtonImage} />
            </TouchableOpacity>

            <TouchableOpacity  >

                <Image source={require('../../../assets/CriarOS.png')}
                    style={FooterStyle.cardButtonImage}
                />
            </TouchableOpacity>

            <TouchableOpacity >

                <Image source={require('../../../assets/Notificacoes.png')}
                    style={FooterStyle.cardButtonImage}
                />
            </TouchableOpacity>

            <TouchableOpacity  >

                <Image source={require('../../../assets/Perfil.png')}
                    style={FooterStyle.cardButtonImage}
                />

            </TouchableOpacity>
            </View>
            <View style={FooterStyle.card} >

                <Text style={FooterStyle.texto}>Minhas OS</Text>
                <Text style={FooterStyle.texto}>Criar OS</Text>
                <Text style={FooterStyle.texto}>Notificações</Text>
                <Text style={FooterStyle.texto}>Perfil</Text>


            </View>
        </View>
    )
}