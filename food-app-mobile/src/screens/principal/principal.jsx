
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import icons from '../../constants/icons';
import { Image } from "react-native";
import AbaFavoritos from '../aba-favoritos/aba-favoritos';
import AbaHome from '../aba-home/aba-home';
import AbaPedidos from '../aba-pedidos/aba-pedidos';
import AbaPerfil from '../aba-perfil/aba-perfil';

const Tab = createBottomTabNavigator();

const Principal = () => {
  return (
            <Tab.Navigator screenOptions={{ tabBarShowLabel: false }} >

                <Tab.Screen name="home" component={AbaHome} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icons.abaHome} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.4 }} />
                    },
                }} />
                <Tab.Screen name="Favoritos" component={AbaFavoritos} options={{
                    title: "Favoritos",
                    headerTitleAlign: "center",
                    headerShadowVisible:false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icons.abaFavorito} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.4 }} />
                    },
                }} />
                <Tab.Screen name="Pedidos" component={AbaPedidos} options={{
                    title: "Pedidos",
                    headerTitleAlign: "center",
                    headerShadowVisible:false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icons.abaPedidos} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.4 }} />
                    },
                }} />
                <Tab.Screen name="Perfil" component={AbaPerfil} options={{
                    title: "Perfil",
                    headerTitleAlign: "center",
                    headerShadowVisible:false,
                    tabBarIcon: ({ focused }) => {
                        return <Image source={icons.abaPerfil} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.4 }} />
                    },
                }} />

            </Tab.Navigator>
        
  );
}

export default Principal