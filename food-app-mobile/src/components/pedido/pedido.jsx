
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './pedido.style'

function Pedido(props) {
  return (
    <TouchableOpacity style={styles.pedido} onPress={()=>props.onclickPedido()}>
      <Image source={props.logotipo} style={styles.logotipo} />
      <View style={styles.textos}>
        <Text style={styles.nome}>{props.nome}</Text>

        <View style={styles.containerVal}>
          <Text style={styles.valor}>{new Intl.NumberFormat("pt-BR", {style:"currency",currency:"BRL"}).format(props.valor)}</Text>
          <Text style={styles.valor}>{props.dt_pedidos}</Text>
        </View>

        <Text style={styles.status}>{props.status}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Pedido