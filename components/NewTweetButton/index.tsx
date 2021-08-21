import React from "react";
import { TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

const NewTweetButton = () => {
    const onPress = () => {}
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