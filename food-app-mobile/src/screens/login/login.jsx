
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './loginStyles';
import Header from '../../components/header/header.jsx';
import TextBox from '../../components/textbox/textbox.jsx';
import Button from '../../components/button/button.jsx';
import { useEffect, useState } from 'react';
import api from '../../constants/api.js';
import { saveUsuario } from '../../storage/storage.usuario.js';
import { LoadUsuario } from '../../storage/storage.usuario.js';

function Login(props) {
    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();
    const [loading,setLoading] = useState(false);

    async function ProcessarLogin(){
        try {
            // setLoading(true)
           
          const response = await api.post("/usuarios/login",{
            email,
            senha
          });

          await saveUsuario(response.data);

          Alert.alert("Sucesso Sr(a). "+response.data.nome)
        //   console.log(response.data)
        } catch (error) {
            setLoading(false)
            if(error.response?.data.error){
                
                Alert.alert(error.response?.data.error)
            }else{
                Alert.alert("Ocorreu um erro tente. novamente: "+error)

            }
        }
    }

    async function CarregarDados() {
        try{
            const usuario = await LoadUsuario();
            console.log(usuario);
        }catch(error){

        }
    }

    useEffect(()=>{
        CarregarDados();
    },[])

    return (
        <View style={styles.container}>
            <Header texto="Acesse sua conta..." />
            {/* <Header texto={email + "" + passw}/> */}
            <View style={styles.formGroup}>
                <View style={styles.form}>
                    <TextBox label="Email" onChangeText={(texto)=>setEmail(texto)} value={email}  placeholders="Digite Seu Email cadastrado" />

                </View>
                <View style={styles.form}>
                    <TextBox label="Senha" onChangeText={(texto)=>setSenha(texto)} value={senha} placeholders="Digite Sua Senha" isPasswords />

                </View>
                <View style={styles.form}>
                    <Button texto="Acessar" onPress={ProcessarLogin} isLoading={loading} />

                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("registro")}>
                    <Text style={styles.footerText}>Criar minha conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;