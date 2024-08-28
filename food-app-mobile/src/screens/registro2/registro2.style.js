import { COLORS, FONT_SIZE } from "../../constants/theme"
import { Platform } from "react-native"
export const styles = {
    container: {
        flex:1,
        // marginTop: Platform.OS === 'android' ? 60:20,
        padding:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.white,
    },
    form:{
        width:"100%",
        marginBottom:15,
        
    },
    scrollView:{
        width:'100%',
    },
    formHorizontal:{
        flexDirection:"row",
    },
    formGroup:{
        width:"100%",
        marginTop:30,
        marginBottom:40,

    },
    footer:{
        width:"100%",
        position:"absolute",
        bottom:0,
        marginBottom:20,


    },
    footerText:{
        textAlign:"center",
        color:COLORS.dark_gray,
        fontSize:FONT_SIZE.md,
    },
    form70:{
        width:"70%",
        marginBottom:15,
        paddingRight:10,

    },
    form30:{
        width:"30%",
        marginBottom:15,
        

    }
}