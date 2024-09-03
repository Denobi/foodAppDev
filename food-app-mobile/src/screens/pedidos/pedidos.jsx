import { View, FlatList, Text, Image } from 'react-native';
import { styles } from './pedidos.style';
import { pedidos } from '../../constants/dados';
import Pedido from '../../components/pedido/pedido';
import icons from '../../constants/icons';

const Pedidos = () => {
    return (

            <View style={styles.container}>
                <FlatList data={pedidos}
                keyExtractor={(ped)=>ped.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>{
                    return <Pedido 
                    logotipo={item.logotipo}
                    nome={item.nome}
                    valor={item.vl_total}
                    dt_pedidos={item.dt_pedido}
                    status={item.status}
                    />
                }}
                contentContainerStyle={styles.containerList}
                ListEmptyComponent={()=>{
                    return <View style={styles.empty}> 
                        <Image source={icons.empty} />
                        <Text style={styles.emptyText}>Nenhum pedido encontrado</Text>
                    </View>
                }}
                
                />
            </View>

    )
}

export default Pedidos