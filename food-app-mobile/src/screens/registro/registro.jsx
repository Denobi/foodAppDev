
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './registro.style.js';
import Header from '../../components/header/header.jsx';
import TextBox from '../../components/textbox/textbox.jsx';
import Button from '../../components/button/button.jsx';
import { useState } from 'react';

function Registro(props) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true}>
                <Header texto="Criar uma conta" />
                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <TextBox label="Nome Completo" placeholders="Digite Seu Nome completo" />
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Email" placeholders="Digite Seu Email para cadastrar" />
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Senha" placeholders="Digite Sua Senha Deseja" isPasswords />
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Confirme sua Senha" placeholders="Confirme Sua Senha Desejada" isPasswords />
                    </View>
                    <View style={styles.form}>
                        <Button texto="Proximo Passo"  onPress={()=> props.navigation.navigate("registro2")}/>

                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Registro;