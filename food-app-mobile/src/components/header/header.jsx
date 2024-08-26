import { Image, Text, View } from "react-native";
import { styles } from "./header.style";
import icons from "../../constants/icons";

function Header(props) {
    return <View style={styles.header}>
            <Image style={styles.logo} source={icons.logo}/>
            <Text style={styles.titles}>{props.texto}</Text>
        </View>
    
}

export default Header;