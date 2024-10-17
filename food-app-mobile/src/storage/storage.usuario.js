import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveUsuario(usuario) {
    try {
        await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
    } catch (error) {
    console.log(error + "Erro ao salvar no storage")
    }
        
}
async function LoadUsuario() {
    try {
        const storage = await AsyncStorage.getItem("usuario")
        return storage ? JSON.parse(storage): {};
    } catch (error) {
    console.log(error + "Erro ao carregar storage")
    }
        
}
export {saveUsuario,LoadUsuario};