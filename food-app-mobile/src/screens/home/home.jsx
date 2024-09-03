import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./home.style";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox";
import { useState } from "react";
import Categorias from "../../components/categorias/categorias";
import { banners, categorias, restaurantes } from "../../constants/dados";
import Banners from "../../components/banners/banners";
import Restaurante from "../../components/restaurante/restaurante";

function Home(props) {
  const [search, setSearch] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icons.logo} style={styles.logo} />
        <Image source={icons.cart} style={styles.cart} />
      </View>
      <View style={styles.search}>
        <TextBox placeholders="O que vamos pedir hoje?" onChangeText={(texto) => setSearch(texto)} value={search} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categorias dados={categorias} />
        <Banners dados={banners} />
        {
          restaurantes.map((restaurante, index) => {
            return <View key={index}>
              <Restaurante logotipo={restaurante.logotipo}
                nome={restaurante.nome}
                endereco={restaurante.endereco}
                icon={icons.favoritoFull2}
              />
            </View>
          })
        }
      </ScrollView>
    </SafeAreaView>
  )

}
export default Home;