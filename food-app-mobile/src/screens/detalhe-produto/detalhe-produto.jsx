import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './detalhe-produto.style'
import { restaurante } from '../../constants/dados';
import icons from '../../constants/icons';
import Button from '../../components/button/button';


function DetalheProduto(props) {

    return (
        <View style={styles.container}>
            <View style={styles.containerFoto}>
                <Image source={icons.produtoPizza} style={styles.foto} resizeMode='cover' />
                <TouchableOpacity style={styles.containerBack} >
                    <Image source={icons.back2} style={styles.back} />
                </TouchableOpacity>
            </View >
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.nome}>Pizza de Calabresa</Text>
                    <Text style={styles.descricao}>A pizza de calabresa é um dos sabores de pizza mais populares e clássicos do Brasil, sendo composta por fatias de linguiça calabresa, queijo muçarela, molho de tomate, cebola, azeitona e orégano</Text>
                    <Text style={styles.valor}>R$ 30,00</Text>
                </View>
            </View>
            <View style={styles.headerObs}>
                <Text style={styles.descricao}>Observações</Text>
                <TextInput style={styles.multiLine}  multiline={true}/>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={icons.menos} style={styles.imgQtd}/>
                </TouchableOpacity>
                    <Text style={styles.qtd}>1</Text>
                <TouchableOpacity>
                    <Image source={icons.mais} style={styles.imgQtd}/>
                </TouchableOpacity>

                <View style={styles.footerBtn}>
                    <Button texto="Inserir"/>
                </View>
            </View>



        </View>
    )
}

export default DetalheProduto;
// onPress={props.navigation.navigate("cardapio")}