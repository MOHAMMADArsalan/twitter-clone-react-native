import React from "react";
import { View } from "react-native";

import { LeftContainer, MainContainer } from "../"
import { TweetProps } from "./types";

const Tweet = (props: TweetProps) => {
    return <View>
        <LeftContainer />
        <MainContainer />
    </View>
}

export  default Tweet;