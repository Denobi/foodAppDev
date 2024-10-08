
import { COLORS, FONT_SIZE } from "../../constants/theme"


export const styles = {
    input:{
      
        width:"100%",
        backgroundColor: COLORS.light_gray,
        padding:10,
        borderRadius:6,
        borderWidth:1,
        borderColor:COLORS.gray,
    },
    label:{
        textAlign:"left",
        marginLeft:5,
        paddingBottom:5,
        color:COLORS.dark_gray,
        fontSize:FONT_SIZE.md,
    }
}