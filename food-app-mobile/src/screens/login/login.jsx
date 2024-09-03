
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './loginStyles';
import Header from '../../components/header/header.jsx';
import TextBox from '../../components/textbox/textbox.jsx';
import Button from '../../components/button/button.jsx';
import { useState } from 'react';

function Login(props) {
    const [email,setEmail] = useState();
    const [passw,setPassw] = useState();

    function executeLogin(){
        setEmail("123456");
    }
    return (
        <View style={styles.container}>
            <Header texto="Acesse sua conta..." />
            {/* <Header texto={email + "" + passw}/> */}
            <View style={styles.formGroup}>
                <View style={styles.form}>
                    <TextBox label="Email" onChangeText={(texto)=>setEmail(texto)} value={email}  placeholders="Digite Seu Email cadastrado" />

                </View>
                <View style={styles.form}>
                    <TextBox label="Senha" onChangeText={(texto)=>setPassw(texto)} value={passw} placeholders="Digite Sua Senha" isPasswords />

                </View>
                <View style={styles.form}>
                    <Button texto="Acessar" onPress={executeLogin} />

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