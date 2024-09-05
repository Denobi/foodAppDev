
import { COLORS, FONT_SIZE } from "../../constants/theme"


export const styles = {
    container:{
        flex:1,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:8,
        backgroundColor:COLORS.white,
    },
    item:{
        flexDirection:"row",
        padding:12,
        borderBottomWidth:1,
        borderBottomColor:COLORS.gray,
    },
    containerIcone:{
        justifyContent:"center",
    },
    icones:{
        width:30,
        height:30,
    },
    textos:{
        flex:1,
        marginLeft:10,
    },
    titulo:{
        color:COLORS.dark_gray,
        fontSize:FONT_SIZE.md,
    },
    subtitulo:{
        color:COLORS.medium_gray,
        fontSize:FONT_SIZE.sm,
    },
    more:{
        width:20,
        height:20,
        
    },
    borderTop:{
        
        borderTopWidth:1,
        borderTopColor:COLORS.gray,
    }
}