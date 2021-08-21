import { StyleSheet,StatusBar } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    newTweetContainer: {
       flexDirection: 'row',
       padding: 15,
        alignSelf: 'flex-start'
    },
    inputsContainer: {
        paddingLeft: 10
    },
    textInput: {
        maxHeight: 300,
        fontSize: 20
    },
    imageInput: {}
})

export default styles;