import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";

import { ProfilePicture } from "../../components"
import styles from "./styles";

const NewTweetScreen = () => {
    const [tweet, setTweet] = useState('')
    const [image, setImageUrl ] = useState('')

    const navigation = useNavigation();
    const onPress = () => {}

    const onClose = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign name="close" size={24} color={Colors.light.tint} onPress={onClose}/>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newTweetContainer}>
                <ProfilePicture image="https://media-exp1.licdn.com/dms/image/C5103AQG9YEoyswOuGQ/profile-displayphoto-shrink_100_100/0/1517550363719?e=1634774400&v=beta&t=Y7cvQGb1bwqdhXK_H_ovmcV6-Wox5HN6D9buYSMbADk" />
                <View style={styles.inputsContainer}>
                    <TextInput
                        placeholder="What's happening?"
                        style={styles.textInput}
                        multiline
                        onChangeText={setTweet}
                        value={tweet}
                    />
                    <TextInput
                        placeholder="Image url (optional)"
                        style={styles.imageInput}
                        onChangeText={setImageUrl}
                        value={image}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewTweetScreen;