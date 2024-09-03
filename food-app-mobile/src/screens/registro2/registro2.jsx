
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './registro2.style.js';
import Header from '../../components/header/header.jsx';
import TextBox from '../../components/textbox/textbox.jsx';
import Button from '../../components/button/button.jsx';
import { useState } from 'react';

function Registro2(props) {

        const [address, setAddress] = useState();
        const [complement, setComplement] = useState();
        const [neighborhood, setNeighborhood] = useState();
        const [city, setCity] = useState();
        const [federalUnit, setFederalUnit] = useState();
        const [zipCode, setZipCode] = useState();
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true}>

                <Header texto="Informe seu endereço." />
                <View style={styles.formGroup}>
                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Endereço" 
                            onChangeText={(texto)=>setAddress(texto)} value={address}
                             placeholders="Digite Seu Endereço: Rua da Rua 2" />
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="Compl..." 
                            onChangeText={(texto)=>setComplement(texto)} value={complement}
                             />
                        </View>
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Bairro" 
                        onChangeText={(texto)=>setNeighborhood(texto)} value={neighborhood}
                         placeholders="Digite Seu Bairro: Bairro dos Bairros" />
                    </View>
                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Cidade" 
                            onChangeText={(texto)=>setCity(texto)} value={city}
                             placeholders="Digite Sua Cidade: Cidade das cidades" />
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="UF" 
                            onChangeText={(texto)=>setFederalUnit(texto)} value={federalUnit}
                             />
                        </View>
                    </View>
                    <View style={styles.form}>
                        <TextBox label="CEP" 
                        onChangeText={(texto)=>setZipCode(texto)} value={zipCode}
                         placeholders="Digite Seu CEP: 00000-00" />
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