
import { COLORS, FONT_SIZE } from "../../constants/theme"


export const styles = {
    produto: {
        width: "100%",
        flexDirection: "row",
        marginBottom:10,
        marginTop:10,
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius:6,

    },
    textos:{
        flex:1,
        padding:8,
    },
    nome:{
        color:COLORS.dark_gray,
        fontSiz:FONT_SIZE.sm,
    },
    descr:{
        color:COLORS.medium_gray,
        fontSiz:FONT_SIZE.sm,

    },
    valor:{
        color:COLORS.dark_gray,
        fontSiz:FONT_SIZE.sm,
        marginTop:8,

    },
    containerDelete:{
        alignItems:"flex-end",
        marginTop:8,
    },
    delete:{
        width: 25,
        height: 25,
    },
        
   
}