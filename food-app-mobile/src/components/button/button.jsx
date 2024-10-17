import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";


function Button(props) {

    return <TouchableOpacity style={[styles.btn,props.isLoading ? styles.loading:""]} onPress={props.onPress} disabled={props.isLoading}>
        {
            props.isLoading ?  <ActivityIndicator style={styles.loadingColor}/> : <Text style={styles.texto}>{props.texto}</Text>
        }
        
        
    </TouchableOpacity>
}

export default Button;