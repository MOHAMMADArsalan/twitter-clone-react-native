import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    tweetHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tweetNamesHeader: {
        flexDirection: 'row'
    },
    name: {
        fontWeight: "bold",
        marginRight: 5

    },
    username: {
        color: 'grey',
        marginRight: 5

    },
    createdAt: {
        color: 'grey',
        marginRight: 5
    },
    content: {
        marginTop: 5,
        lineHeight: 18
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 15,
        marginVertical: 10,
        resizeMode: 'cover'
    }
})

export default styles;