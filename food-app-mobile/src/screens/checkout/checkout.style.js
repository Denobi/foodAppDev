
import { COLORS, FONT_SIZE } from "../../constants/theme"


export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
    },
   
    titulo:{
        fontSize:FONT_SIZE.md,
        color:COLORS.dark_gray,
        textAlign:"center",
    },
    footer:{
     
        padding:10,
      
    },
    valores:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:4,
        marginBottom:4,
    },
    valor:{
        fontSize:FONT_SIZE.sm, 
        color:COLORS.dark_gray,
   
    },
    
    total: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold"
    },
    flatContainer:{
        marginTop:20, 
        padding:3,
    }, 
    containerBtn:{
        marginTop:10,
        paddingTop:7,
    }
 
}