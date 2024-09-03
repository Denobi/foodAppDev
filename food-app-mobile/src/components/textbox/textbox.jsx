import { Text, TextInput } from "react-native";
import { styles } from "./textbox.style";

function TextBox(props) {
    return ( 
        <>
        {
            props.label && 
        <Text style={styles.label}>{props.label}</Text> 
        }
        <TextInput 
            style={styles.input} 
            placeholder={props.placeholders} 
            onChangeText={(texto)=>props.onChangeText(texto)} 
            value={props.value} 
            secureTextEntry={props.isPasswords

            }/> 
        </>
     );
}

export default TextBox;