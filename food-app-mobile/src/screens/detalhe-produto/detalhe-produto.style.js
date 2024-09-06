
import { COLORS, FONT_SIZE } from "../../constants/theme"


export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    containerFoto: {
        alignItems: "center",
    },
    foto: {
        height: 170,
    },
    containerBack: {
        position: "absolute",
        top: 60,
        left: 10,
    },
    back: {
        width: 40,
        height: 40,
    },
    header: {
        width: "100%",
        padding: 15,
        flexDirection: "row",
    },
    headerText: {
        flex: 1,
    },
    nome: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2,
    },
 
    descricao: {
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray,
    },
    valor: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2,
        marginTop: 17,

    },
    headerObs:{
        width:"100%",
        padding:10,
        
    },
    multiLine:{
        flex:1,
        backgroundColor:COLORS.light_gray,
        padding:10,
        color:COLORS.dark_gray,
        borderRadius:6,

        borderWidth:1,
        borderColor:COLORS.gray,

        minHeight:250,
        textAlignVertical:"top",

    },
    footer:{
        position:"absolute",
        bottom:0,
        left:0,
        flexDirection:"row",
        padding:10,
        alignItems:"center",
    },
    imgQtd:{
        height:40,
        width:40,
  
    },
    qtd:{
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        width:40,
        textAlign:"center",
    },
    footerBtn:{
        flex:1,
        marginRight:5,
        marginLeft:20,
    },
}