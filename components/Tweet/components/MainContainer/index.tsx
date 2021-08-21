import React from "react";
import { View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import { Footer } from "./components";
import { Text } from "../../../Themed";
import styles from "./styles";
import { MainContainerProps } from "./types";

const MainContainer = ({ tweet }: MainContainerProps) => {
    const { user } = tweet;
    return (
        <View style={styles.container}>
            <View style={styles.tweetHeaderContainer}>
                <View style={styles.tweetNamesHeader}>
                    <Text style={styles.name}>{user.name.split(" ")[0]}</Text>
                    <Text style={styles.username}>@{user.username}</Text>
                    <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
                </View>
                <Entypo name="chevron-down" size={16} color="grey"/>
            </View>
            <View>
                <Text style={styles.content}>{tweet.content}</Text>
                {!!tweet.image && <Image source={{ uri: tweet.image }} style={styles.image}/>}
            </View>
            <Footer tweet={tweet}/>
        </View>
    )
}

export default MainContainer;