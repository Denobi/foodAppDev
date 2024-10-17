
import { Alert, ScrollView, View } from 'react-native';
import { styles } from './registro2.style.js';
import Header from '../../components/header/header.jsx';
import TextBox from '../../components/textbox/textbox.jsx';
import Button from '../../components/button/button.jsx';
import { useState } from 'react';
import api from '../../constants/api.js';

function Registro2(props) {

    const nome = props.route.params.nome;
    const email = props.route.params.email;
    const senha = props.route.params.senha1;
    console.log(nome, email, senha)

    const [address, setAddress] = useState();
    const [complement, setComplement] = useState();
    const [neighborhood, setNeighborhood] = useState();
    const [city, setCity] = useState();
    const [federalUnit, setFederalUnit] = useState();
    const [zipCode, setZipCode] = useState();
    const [loading, setLoading] = useState(false);


    async function ProcessarCadastro() {
        try {
            setLoading(false)
            const response = await api.post("/usuarios", {
                nome,
                email,
                senha,
                endereco: address,
                complemento: complement,
                bairro: neighborhood,
                cidade: city,
                uf: federalUnit,
                cep: zipCode
            });
            Alert.alert("Conta criada com sucesso Sr(a). " + nome,setLoading(false))
            //   console.log(response.data)
        } catch (error) {
            setLoading(false)
            if (error.response?.data.error) {

                Alert.alert(error.response?.data.error)
            } else {
                Alert.alert("Ocorreu um erro tente. novamente: " + error)

            }
        }
    }
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>

                <Header texto="Informe seu endereço." />
                <View style={styles.formGroup}>
                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Endereço"
                                onChangeText={(texto) => setAddress(texto)} value={address}
                                placeholders="Digite Seu Endereço: Rua da Rua 2" />
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="Compl..."
                                onChangeText={(texto) => setComplement(texto)} value={complement}
                            />
                        </View>
                    </View>
                    <View style={styles.form}>
                        <TextBox label="Bairro"
                            onChangeText={(texto) => setNeighborhood(texto)} value={neighborhood}
                            placeholders="Digite Seu Bairro: Bairro dos Bairros" />
                    </View>
                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Cidade"
                                onChangeText={(texto) => setCity(texto)} value={city}
                                placeholders="Digite Sua Cidade: Cidade das cidades" />
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="UF"
                                onChangeText={(texto) => setFederalUnit(texto)} value={federalUnit}
                            />
                        </View>
                    </View>
                    <View style={styles.form}>
                        <TextBox label="CEP"
                            onChangeText={(texto) => setZipCode(texto)} value={zipCode}
                            placeholders="Digite Seu CEP: 00000-00" />
                    </View>

                    <View style={styles.form}>
                        <Button texto="Criar minha conta" onPress={ProcessarCadastro} isLoading={loading} />

                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Registro2;