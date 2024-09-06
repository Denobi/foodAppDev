
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screens/principal/principal";
import Busca from "./screens/busca/busca";
// import DetalheProduto from "./screens/detalhe-produto/detalhe-produto";
import DetalhePedido from "./screens/detalhe-pedido/detalhe-pedido";
import Checkout from "./screens/checkout/checkout";
import { Alert, Text, TouchableOpacity } from "react-native";
import { COLORS } from "./constants/theme";
import Cardapio from "./screens/cardapio/cardapio"


const Stack = createNativeStackNavigator();

function RoutesAuth() {
    return (
        <NavigationContainer>
            <Stack.Navigator >

                <Stack.Screen name="principal" component={Principal} options={{ headerShown: false }} />
                <Stack.Screen name="cardapio" component={Cardapio} options={{ headerShown: false }} />
                <Stack.Screen name="detalhepedido" component={DetalhePedido}
                    options={{
                        headerShadowVisible: false,
                        title: "Detalhes do Pedido",
                        headerTitleAlign: "center",
                        animation: "slide_from_bottom"
                    }} />
                <Stack.Screen name="checkout" component={Checkout} options={{
                    headerShadowVisible: false,
                    title: "Meu Pedido",
                    headerTitleAlign: "center",
                    animation: "slide_from_bottom",
                    headerRight: () => {
                        return <TouchableOpacity onPress={() => alert("limpar")}>
                            <Text style={{ color: COLORS.red }}>Limpar</Text>
                        </TouchableOpacity>
                    }
                }} />
                <Stack.Screen name="busca" component={Busca} options={{
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    title: "Resultado da Busca",
                    headerBackTitle: "voltar",
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RoutesAuth;


