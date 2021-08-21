import React from "react";
import { FlatList, View } from "react-native";

import { Tweet } from "../";
import tweets from "../../data/tweets";
import styles from "./styles";
const Feed = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tweets}
                renderItem={({ item }) => <Tweet tweet={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
export default Feed;