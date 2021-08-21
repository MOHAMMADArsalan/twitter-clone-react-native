import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    number: {
        color: 'grey',
        marginLeft: 5
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start'
    }
})

export default styles;