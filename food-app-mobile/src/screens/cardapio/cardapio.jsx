import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './cardapio.style'
import { restaurante } from '../../constants/dados';
import icons from '../../constants/icons';
import Produto from '../../components/produto/produto';

function Cardapio(props) {
    function OpenCardapio(){
        props.navigation.navigate("principal")
      }
    return (
        <View style={styles.container}>
            <View style={styles.containerFoto}>
                <Image source={restaurante.foto} style={styles.foto} resizeMode='contain' />
                <TouchableOpacity style={styles.containerBack} onPress={OpenCardapio}>
                    <Image source={icons.back2} style={styles.back} />
                </TouchableOpacity>
            </View >
                <View style={styles.header}>
                    <View style={styles.headerText}>
                        <Text style={styles.nome}>Nome do estabelecimento</Text>
                        <Text style={styles.taxa}>taxa de entega: R$ 5,00</Text>
                    </View>
                    <Image source={icons.favoritoFull2} style={styles.favorito} />
                </View>
            <ScrollView>

                <View style={styles.location}>

                    <Image source={icons.location} style={styles.locationImg} />
                    <Text style={styles.endereco}>Av. Paulista,1250 - CJ 1234</Text>

                </View>
                {
                    restaurante.cardapio.map((item) => {
                        return <View key={item.idCategoria} style={styles.containerProduto}>
                            <Text style={styles.categoria}>{item.categoria}</Text>
                            {
                                item.itens.map((produt) => {
                                    return <Produto key={produt.idProduto} idProduto={produt.idProduto} foto={produt.foto} nome={produt.nome} descr={produt.descricao} valor={produt.valor} />
                                })
                            }
                        </View>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Cardapio;