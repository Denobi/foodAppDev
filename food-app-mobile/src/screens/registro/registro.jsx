
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './registro.style.js';
import Header from '../../components/header/header.jsx';
import TextBox from '../../components/textbox/textbox.jsx';
import Button from '../../components/button/button.jsx';
import { useState } from 'react';

function Registro(props) {
    const [nome,setNome] = useState();
    const [email,setEmail] = useState();
    const [senha1,setSenha1] = useState();
    const [senha2,setSenha2] = useState();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
                <Header texto="Criar uma conta" />
                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <TextBox label="Nome Completo" placeholders="Digite Seu Nome completo"  onChangeText={(texto)=>setNome(texto)} value={nome} />
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Email" placeholders="Digite Seu Email para cadastrar"  onChangeText={(texto)=>setEmail(texto)} value={email}/>
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Senha" placeholders="Digite Sua Senha Deseja"  onChangeText={(texto)=>setSenha1(texto)} value={senha1} />
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Confirme sua Senha" placeholders="Confirme Sua Senha Desejada"  onChangeText={(texto)=>setSenha2(texto)} value={senha2}/>
                    </View>
                    <View style={styles.form}>
                        <Button texto="Proximo Passo"  onPress={()=> props.navigation.navigate("registro2",{
                            nome,email,senha1
                        })}/>

                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Registro;