
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
        padding: 10,
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
    taxa: {
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray,
    },
    favorito: {
        width: 40,
        height: 40,
    },
    location: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    locationImg: {
        width: 40,
        height: 40,
        margin:10,

    },
    endereco: {
        fontSize: FONT_SIZE.md,
        width:"90%",
        color: COLORS.dark_gray,

    },
    containerProduto:{
        padding:10,
    },
    categoria:{
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        padding: 2,
    },
}