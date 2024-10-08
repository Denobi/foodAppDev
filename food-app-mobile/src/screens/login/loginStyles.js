import { COLORS, FONT_SIZE } from "../../constants/theme"
import { Platform } from "react-native"
export const styles = {
    container: {
        flex:1,
        // marginTop: Platform.OS === 'android' ? 60:40,
        padding:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.white,
    },
    form:{
        width:"100%",
        marginBottom:25,
        
    },
    formGroup:{
        width:"100%",
        marginTop:50,
        marginBottom:40,

    },
    footer:{
        width:"100%",
        bottom:0,
        position:"absolute",
        marginBottom:40,


    },
    footerText:{
        textAlign:"center",
        color:COLORS.dark_gray,
        fontSize:FONT_SIZE.md,
    }
}