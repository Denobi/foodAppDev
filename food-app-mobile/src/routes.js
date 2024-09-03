import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login/login";
import Registro from "./screens/registro/registro";
import Registro2 from "./screens/registro2/registro2";
import Busca from "./screens/busca/busca";



const Stack = createNativeStackNavigator();

function Routes() {
    return(
        <NavigationContainer >
            
            <Stack.Navigator initialRouteName="busca" >
            
                <Stack.Screen name="busca" component={Busca} options={{ 
                    headerShadowVisible:false,
                    headerTitleAlign:"center",
                    title:"Resultado da Busca",
                    headerBackTitle:"voltar",
                    }}/>
                <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="registro" component={Registro} options={{ 
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle:"voltar",
                    }}/>
                <Stack.Screen name="registro2" component={Registro2}options={{ 
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle:"voltar",
                    }}/>
               
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;