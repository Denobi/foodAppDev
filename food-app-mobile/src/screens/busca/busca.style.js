
import { COLORS, FONT_SIZE } from "../../constants/theme"


export const styles = {
    container:{
        flex:1,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:8,
        backgroundColor:COLORS.white,
    },
    containerList:{
        flexGrow:1,
    },
    empty:{
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        paddingBottom:100,
        flex:1,
    },
    emptyText:{
        fontSize:FONT_SIZE.sm,
        color:COLORS.dark_gray,
        
    }
}