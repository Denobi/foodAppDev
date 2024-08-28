
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './registro2.style.js';
import Header from '../../components/header/header.jsx';
import TextBox from '../../components/textbox/textbox.jsx';
import Button from '../../components/button/button.jsx';
import { useState } from 'react';

function Registro2(props) {
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true}>

                <Header texto="Informe seu endereço." />
                <View style={styles.formGroup}>
                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Endereço" placeholders="Digite Seu Endereço: Rua da Rua 2" />
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="Compl..." />
                        </View>
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Bairro" placeholders="Digite Seu Bairro: Bairro dos Bairros" />
                    </View>
                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Cidade" placeholders="Digite Sua Cidade: Cidade das cidades" />
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="UF" />
                        </View>
                    </View>
                    <View style={styles.form}>
                        <TextBox label="CEP" placeholders="Digite Seu CEP: 00000-00" />
                    </View>

                    <View style={styles.form}>
                        <Button texto="Criar minha conta" />

                    </View>
                </View>
     
            </ScrollView>
        </View>
    )
}

export default Registro2;