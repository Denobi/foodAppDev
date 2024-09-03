
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from './screens/perfil/perfil';
import Pedidos from './screens/pedidos/pedidos';
import Favoritos from './screens/favoritos/favoritos';
import Home from './screens/home/home';
import icons from "./constants/icons";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function RoutesAuth() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarShowLabel: false }} >

                <Tab.Screen name="home" component={Home} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icons.abaHome} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.4 }} />
                    },
                }} />
                <Tab.Screen name="Favoritos" component={Favoritos} options={{
                    title: "Favoritos",
                    headerTitleAlign: "center",
                    headerShadowVisible:false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icons.abaFavorito} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.4 }} />
                    },
                }} />
                <Tab.Screen name="Pedidos" component={Pedidos} options={{
                    title: "Pedidos",
                    headerTitleAlign: "center",
                    headerShadowVisible:false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icons.abaPedidos} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.4 }} />
                    },
                }} />
                <Tab.Screen name="Perfil" component={Perfil} options={{
                    title: "Perfil",
                    headerTitleAlign: "center",
                    headerShadowVisible:false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icons.abaPerfil} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.4 }} />
                    },
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default RoutesAuth;


