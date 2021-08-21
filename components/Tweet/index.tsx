import React from "react";
import { View } from "react-native";

import { LeftContainer, MainContainer } from "./components"
import { TweetProps } from "./types";
import styles from "./styles";

const Tweet = ({ tweet }: TweetProps) => {
    return <View style={styles.container}>
        <LeftContainer user={tweet.user}/>
        <MainContainer tweet={tweet}/>
    </View>
}

export default Tweet;