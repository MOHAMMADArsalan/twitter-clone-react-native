import React from "react";
import { TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation }  from "@react-navigation/native";

import styles from "./styles";

const NewTweetButton = () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("NewTweet");
    }
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={onPress} 
            style={styles.button}
            >
            <MaterialCommunityIcons size={30} color={'#fff'} name="feather"/>
        </TouchableOpacity>
    )
}

export default NewTweetButton;